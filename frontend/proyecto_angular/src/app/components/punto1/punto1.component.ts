import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  productos!: Array<Producto>;

  constructor(private productoService: ProductoService, private router: Router) {
    this.productos = new Array<Producto>();

    this.cargarProductos();
  }

  ngOnInit(): void {
  }

  /**
   * Obtener los productos de la base de datos
   */
  cargarProductos(): void {
    this.productoService.getProductosDestacados().subscribe(
      result => {
        let producto: Producto = new Producto();

        result.forEach((element: any) => {
          Object.assign(producto, element);

          this.productos.push(producto);

          producto = new Producto();
        });
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  cargarFormularioProducto(): void {
    this.router.navigate(['punto1-form', 0]);
  }
}
