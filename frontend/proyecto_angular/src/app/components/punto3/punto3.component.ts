import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  tickets!: Array<Ticket>;
  categoria!: string;
  activo!: boolean;

  constructor(private ticketService: TicketService, private router: Router) {
    this.tickets = new Array<Ticket>();

    this.activo = false;

    this.categoria = "";

    this.cargarTickets();
  }

  ngOnInit(): void {
  }

  /**
   * Carga TODOS los Tickets en la lista
   */
  cargarTickets(): void {
    this.tickets = new Array<Ticket>();

    this.ticketService.getTickets().subscribe(
      result => {
        let ticket: Ticket = new Ticket();

        result.forEach((element: any) => {
          Object.assign(ticket, element);

          this.tickets.push(ticket);

          ticket = new Ticket();

          this.activo = false;
        });
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Carga los Tickets por categoria
   */
  cargarTicketsPorCategoria(): void {
    this.tickets = new Array<Ticket>();

    this.activo = true;

    this.ticketService.getTicketsCategoria(this.categoria).subscribe(
      result => {
        let ticket: Ticket = new Ticket();

        result.forEach((element: any) => {
          Object.assign(ticket, element);

          this.tickets.push(ticket);

          ticket = new Ticket();          
        });
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Carga el formulario de alta de Ticket
   */
  cargarFormularioTicket(): void {
    this.router.navigate(['punto3-form', 0]);
  }

  /**
   * Elimina un Ticket
   */
  eliminarTicket(ticket: Ticket): void {
    this.ticketService.deleteTicket(ticket._id).subscribe(
      result => {
        this.cargarTickets();
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Carga el formulario con la informacion a modificar
   * @param ticket 
   */
  modificarTicket(ticket: Ticket): void {
    this.router.navigate(['punto3-form', ticket._id]);
  }

  /**
   * Los parametros que puedo recibir son 'l' y 'e'. Entonces retorno, por ejemplo, 'l' = 'Local'
   * @param categoria 
   * @returns 
   */
  obtenerCategoriaEspectador(categoria: string): string {
    if (categoria === 'l') {
      return 'Local';
    }
    return 'Extranjero';
  }
}
