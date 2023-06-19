import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1-form',
  templateUrl: './punto1-form.component.html',
  styleUrls: ['./punto1-form.component.css']
})
export class Punto1FormComponent implements OnInit {

  producto!: Producto;

  constructor(private productoService: ProductoService, private router: Router) {
    this.producto = new Producto();
  }

  ngOnInit(): void {
  }

  /**
   * Agrega un Producto a la base de datos
   */
  agregarProducto() {
    this.productoService.postProducto(this.producto).subscribe(
      result => {
        this.router.navigate(['punto1']);

        this.producto = new Producto();
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Retorna a la lista de Productos
   */
  volverLista(): void {
    this.router.navigate(['punto1']);
  }
}
