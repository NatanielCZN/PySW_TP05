import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private domSanitizer: DomSanitizer, private productoService: ProductoService, private router: Router) {
    this.producto = new Producto();
  }

  ngOnInit(): void {
  }

  /**
   * Agrega un Producto a la base de datos
   */
  agregarProducto(): void {
    this.productoService.postProducto(this.producto).subscribe(
      result => {
        this.producto = new Producto();

        this.router.navigate(['punto1']);
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

  /**
   * Cambia el formato de una imagen a base64
   * @param event 
   */
  onFileSelected(event: any): void {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64data = reader.result as string;

      this.producto.imagen = base64data;

      // Reiniciar el campo de entrada de tipo 'file'
      const inputElement: HTMLInputElement = event.target;

      inputElement.value = '';
    };

    reader.readAsDataURL(file);
  }
}
