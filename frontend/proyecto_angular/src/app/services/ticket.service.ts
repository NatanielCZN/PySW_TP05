import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private httpClient: HttpClient) {

  }

  getTickets(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this.httpClient.get(this.urlBase + "ticket/", httpOption);
  }

  getTicket(_id: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
        .append('_id', _id)
    }

    return this.httpClient.get(this.urlBase + "ticket/" + _id, httpOption);
  }

  deleteTicket(_id: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
        .append('_id', _id)
    }

    return this.httpClient.delete(this.urlBase + "ticket/" + _id, httpOption);
  }

  getTicketsCategoria(categoria: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
        .append('categoriaEspectador', categoria)
    }

    return this.httpClient.get(this.urlBase + "ticket/categoria/" + categoria, httpOption);
  }

  postTicket(ticket: Ticket): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),

      params: new HttpParams()
    }

    let body = JSON.stringify(ticket);

    return this.httpClient.post(this.urlBase + "ticket/", body, httpOption);
  }

  putTicket(ticket: Ticket): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),

      params: new HttpParams()
        .append('_id', ticket._id)
    }

    let body = JSON.stringify(ticket);

    return this.httpClient.put(this.urlBase + "ticket/" + ticket._id, body, httpOption);
  }

  getEspectadores(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this.httpClient.get(this.urlBase + "espectador/", httpOption);
  }
}
