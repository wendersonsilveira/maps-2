import { Component, ɵConsole, ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";
import { GoogleServiceService } from "./service/google-service.service";
import { GestartServicesService } from "./service/gestart-services.service";
import alasql from 'alasql';
import { Chart } from 'chart.js';

import {} from "googlemaps";
interface ItemData {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("gmap", { static: true }) gmapElement: any;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  constructor(
    private googleMapsService: GoogleServiceService,
    private gestartService: GestartServicesService
  ) {}
  chart = [];

  latitude: any;
  longitude: any;
  qtdPessoa: any = 3.5;
  qtdPublico: any;
  qtdUnidade: any;
  endereco: any;
  novo_endereco: any;
  distancia: any;
  locations = [];
  tipoBusca: any = "geocode";
  markers: google.maps.Marker[] = [];
  bairros: any = [];
  expanded: any = 1;


  markerTypes = [
    {
      text: "Parking",
      value: "parking_lot_maps.png",
    },
  ];

  selectedMarkerType: string = "";

  isHidden = false;
  lat: any;
  lng: any;
  map: google.maps.Map;
  switchValue: any = "false";
  totalBairros: any;
  array = [1, 2, 3, 4];
  listOfData: ItemData[] = [];

  array2 =
		[
      {
        "quantidade":29,
        "titulo":"Líder no segmento com mais de 29 anos de experiência, mais de 500 clientes e mais de 35 mil unidades atendidas.",
        "ano":1998,
      
      },
	
		]

  ngOnInit() {
    this.pegarLocalizacaoAtual();
  }
 
  

  ngAfterContentInit() {
    let mapProp = {
      center: new google.maps.LatLng(-20.311142, -40.298068),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);  

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
    this.listOfData = data;
  }
    
  

  getAddress(place: object) {
    console.log("busca: " + place["formatted_address"])
    this.endereco = place["formatted_address"];
  }
  mudarTipoBusca(e) {
    this.endereco = "";
    this.tipoBusca = e.target.value;
    this.googleMapsService.tipoDeVisualizacao.next(this.tipoBusca);
  }

  pegarLocalizacaoAtual() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    } else {
      console.log("User not allow");
    }
  }

  prepararEndereco() {
    this.clearMarkers()
    this.novo_endereco = this.endereco.split(" ").join("+");
    this.googleMapsService
      .converterEndereco(this.novo_endereco)
      .subscribe((data) => {
        console.log("Dados convertido: " + JSON.stringify(data))
        this.latitude = parseFloat(
          data["results"][0]["geometry"]["location"]["lat"].toString()
        );
        this.longitude = parseFloat(
          data["results"][0]["geometry"]["location"]["lng"].toString()
        );

        this.condominiosRaio();
      });
  }

  condominiosRaio() {
    this.gestartService
      .buscarCondominios(this.latitude, this.longitude, this.distancia)
      .subscribe((data) => {
        console.log("condominios: " + JSON.stringify(data))
        this.addListaCondominios(data);
       this.bairros = alasql('select BAICON, SUM(QTDE_UNIDADES) as UNIDADES from ? GROUP BY BAICON', [data]);
       
        this.setCenter();
      });
  }
  
  addListaCondominios(data) {
    console.log("data: " + JSON.stringify(data))
    this.locations = [];
    this.qtdUnidade = 0;
    for (let i = 0; i < data.length; i++) {
      this.qtdUnidade += parseInt(data[i]["QTDE_UNIDADES"]);
      let location = new google.maps.LatLng(data[i]["LAT"], data[i]["LNG"]);
      this.locations.push(data[i]);
      this.addMarker(location,i);
    }
    this.qtdPublico = this.qtdPessoa * this.qtdUnidade;
  }

  
  inserirInfoWindow(index, marker,map){
    console.log('distancia: ' + this.locations[index]["DISTANCIA"])
    let nome = this.locations[index]["NOMCON"];
    let bairro = this.locations[index]["BAICON"];
    let distancia =  Math.round(parseFloat(this.locations[index]["DISTANCIA"].toString()));
    let unidades =  this.locations[index]["QTDE_UNIDADES"];
    let publico =  Math.round(unidades * this.qtdPessoa);

   var contentString = `<div id="iw-container">
   <div class="iw-title">${nome}</div>
   <div class="iw-content">
     <div>Bairro: ${bairro}</div>
     <div>Encontra-se a ${distancia}km de distacia do ponto determinado, </div>

     <p>atualmente conta com ${unidades} unidades, alcançando uma média de ${publico} pessoas</p>
    
 </div>`;
    
   var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    
    marker.addListener('click', function() {
      infowindow.open(map,marker);
    });
    marker.addListener('mouseout', function() {
      infowindow.close();
  });
  }
 

   addMarker(location, index) {
    console.log("location: " + location)
   const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: "assets/iconverde.png",

      title:  this.locations[index]["NOMCON"].toString() + " " +
      "|" + " " + 
      this.locations[index]["QTDE_UNIDADES"].toString(),

    });

    this.inserirInfoWindow(index, marker, this.map);
 
  }

  setCenter() {
    this.map.setCenter(null);
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
    let location = new google.maps.LatLng(this.latitude, this.longitude);
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: "Você!",
      icon: "assets/icone.png",

       animation: google.maps.Animation.BOUNCE,
    });
  }

  setMapOnAll(map: google.maps.Map | null) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  


  clearMarkers() {
    this.setMapOnAll(null);
  }
}
