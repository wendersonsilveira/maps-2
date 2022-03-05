import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GestartServicesService {
  constructor(private http: HttpClient) {}

  API: any = "http://api.gestartapp.com.br:8080/geo/condominios/";
  KEY: any = "00269441-01A8-42F8-9A93-87A1EDD32C11/";

  buscarCondominios(lat: any, lng: any, raio: any) {
    console.log("teste")
    return this.http.get(this.API + this.KEY + lat + "/" + lng + "/" + raio);
  }
}
