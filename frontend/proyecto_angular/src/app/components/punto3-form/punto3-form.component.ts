import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent implements OnInit {

  ticket!: Ticket;
  accion: string = "";
  espectadores!: Array<Espectador>;
  test!: string;

  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.ticket = new Ticket();

    //this.accion = "new";

    this.cargarEspectadores();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
      } else {
        this.accion = "update";

        this.cargarTicketEnForm(params['id']);
      }
    });
  }

  /**
   * Guarda un Ticket en la base de datos
   */
  guardarTicket(): void {
    this.ticketService.postTicket(this.ticket).subscribe(
      result => {
        this.router.navigate(['punto3']);

        this.ticket = new Ticket();
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Busca y carga un Ticket en el formulario
   * @param _id 
   */
  cargarTicketEnForm(_id: string): void {
    this.ticketService.getTicket(_id).subscribe(
      result => {
        Object.assign(this.ticket, result);

        this.ticket.espectador = this.espectadores.find(item => (item._id == this.ticket.espectador._id))!;
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Modifica un Ticket
   */
  modificarTicket(): void {
    this.ticketService.putTicket(this.ticket).subscribe(
      result => {
        this.router.navigate(['punto3']);
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Carga TODOS los Espectadores en la lista
   */
  cargarEspectadores(): void {
    this.espectadores = Array<Espectador>();

    this.ticketService.getEspectadores().subscribe(
      result => {
        let espectador: Espectador = new Espectador();

        result.forEach((element: any) => {
          Object.assign(espectador, element);

          this.espectadores.push(espectador);

          espectador = new Espectador();
        });
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Regresa a la lista de tickets
   */
  volverLista(): void {
    this.router.navigate(['punto3']);
  }
}
