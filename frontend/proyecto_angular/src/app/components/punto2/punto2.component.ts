import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  transacciones!: Array<Transaccion>;
  transaccion!: Transaccion;
  conversion!: number;

  filtroHabilitado!: boolean;
  mOrigen!: string;
  mDestino!: string;

  constructor(private transaccionService: TransaccionService) {
    this.transacciones = new Array<Transaccion>();

    this.transaccion = new Transaccion();

    this.conversion = 0;

    this.filtroHabilitado = false;
  }

  ngOnInit(): void {
  }

  /**
   * Agrega una Transaccion a la lista
   */
  agregarTransaccion(): void {
    this.transaccion.calcularCantidadDestino();

    this.conversion = this.transaccion.cantidadDestino;

    this.transaccionService.postTransaccion(this.transaccion).subscribe(
      result => {
        this.transaccion = new Transaccion();

        this.cargarTransacciones();
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Carga TODAS las Transacciones
   */
  cargarTransacciones(): void {
    this.transacciones = new Array<Transaccion>();

    this.transaccionService.getTransacciones().subscribe(
      result => {
        let transaccion: Transaccion = new Transaccion();

        result.forEach((element: any) => {
          Object.assign(transaccion, element);

          this.transacciones.push(transaccion);

          transaccion = new Transaccion();
        });

        this.filtroHabilitado = true;
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Carga las Transacciones de acuerdo a su monedaOrigen y monedaDestino
   * 
   * @param monedaOrigen 
   * @param monedaDestino 
   */
  cargarTransaccionesOrigenDestino(): void {
    this.transacciones = new Array<Transaccion>();

    this.transaccionService.getTransaccionesOrigenDestino(this.mOrigen, this.mDestino).subscribe(
      result => {
        let transaccion: Transaccion = new Transaccion();

        result.forEach((element: any) => {
          Object.assign(transaccion, element);

          this.transacciones.push(transaccion);

          transaccion = new Transaccion();
        });
      },

      error => {
        alert("Error: " + error);
      }
    );
  }
}
