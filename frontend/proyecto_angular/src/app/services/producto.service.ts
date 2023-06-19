import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private httpClient: HttpClient) { 

  }

  getProductosDestacados(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this.httpClient.get(this.urlBase + "producto/destacados", httpOption);
  }  

  postProducto(producto: Producto): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),

      params: new HttpParams()
    }

    let body = JSON.stringify(producto); // Serializa el JSON
    
    return this.httpClient.post(this.urlBase + "producto/", body, httpOption);
  }
}
