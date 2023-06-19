import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private httpClient: HttpClient) {

  }

  postTransaccion(transaccion: Transaccion): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),

      params: new HttpParams()
    }

    let body = JSON.stringify(transaccion);

    return this.httpClient.post(this.urlBase + "transaccion/", body, httpOption);
  }

  getTransacciones(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this.httpClient.get(this.urlBase + "transaccion/", httpOption);
  }

  getTransaccionesOrigenDestino(monedaOrigen: string, monedaDestino: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
        .append('monedaOrigen', monedaOrigen)
        .append('monedaDestino', monedaDestino)
    }

    return this.httpClient.get(this.urlBase + "transaccion/" + monedaOrigen + "/" + monedaDestino, httpOption);
  }
}
