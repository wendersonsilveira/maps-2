import {
  Component,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  AfterViewInit,
  Input,
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GoogleServiceService } from "./service/google-service.service";

@Component({
  selector: "AutocompleteComponent",
  template: `
    <input
    class="form-control"
      name="endereco"
      type="text"
      [(ngModel)]="autocompleteInput"
      #addresstext
    />
  `,
  // <input nz-input placeholder="default size" nzSize="default" [(ngModel)]="autocompleteInput"/>
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild("addresstext", { static: true }) addresstext: any;

  autocompleteInput: string;
  queryWait: boolean;

  constructor(private googleMapsService: GoogleServiceService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // this.getPlaceAutocomplete();
    this.setarTipoPesquisa("establishment");
    this.setarTipoPesquisa("geocode");

    // por enquanto nao preciso dessa função, sendo utilizada apenas caso fosse usar BehaviorSubject
    //this.mudarTipodeBusca();
  }

  setarTipoPesquisa(tipo) {
    this.adressType = tipo;
    this.getPlaceAutocomplete();
  }
  //usando BehaviorSubject para alterar tipo de pesquisa atraves de um select
  mudarTipodeBusca() {
    this.googleMapsService.tipoDeVisualizacao.subscribe((value) => {
      this.adressType = value;
      this.getPlaceAutocomplete();
    });
  }

  private getPlaceAutocomplete() {
    console.log("entrou aqui--" + this.adressType);

    const autocomplete = new google.maps.places.Autocomplete(
      this.addresstext.nativeElement,
      {
        componentRestrictions: { country: "BR" },
        types: [this.adressType], // 'establishment' / 'address' / 'geocode'
      }
    );
    google.maps.event.addListener(autocomplete, "place_changed", () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }
}
