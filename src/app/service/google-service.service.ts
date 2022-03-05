import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GoogleServiceService {
  constructor(private http: HttpClient) {}

  apiGeoCode: any =
    "https://maps.googleapis.com/maps/api/geocode/json?address=";
  KEY: any = "&key=AIzaSyAakgmLOzLaXeB5MxlBrkzJsxnvSwS_XuQ";

  public tipoDeVisualizacao: BehaviorSubject<any> = new BehaviorSubject<any>(
    "geocode"
  );

  converterEndereco(endereco: any) {
    return this.http.get(this.apiGeoCode + endereco + this.KEY);
  }
}
