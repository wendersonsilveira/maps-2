import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GestartServicesService {
  constructor(private http: HttpClient) {}

  API: any = "https://condonalback.herokuapp.com";
  KEY: any = "00269441-01A8-42F8-9A93-87A1EDD32C11/";

  buscarCondominios(lat: any, lng: any, raio: any) {
    let data = {
      "lat": lat,
      "lng": lng,
      "raio": raio
    }
    return this.http.post(this.API + '/calcular',data);
  }

}
