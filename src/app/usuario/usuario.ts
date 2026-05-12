import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';
import { Producto } from '../producto/producto';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, JsonPipe, CurrencyPipe } from '@angular/common';
import { CambiaLetras, cambiaLetrasASCII } from '../pipes/cambiaLetras';

@Component({
  selector: 'app-usuario',
  imports: [Ventas, Producto,CambiaLetras,cambiaLetrasASCII,UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, JsonPipe, CurrencyPipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  web = "https://amazon.com";
  redirigir = false;
  marcasAutos = [
    {
      "id": "1",
      "marca": "Toyota",

    },
    {
      "id": "2",
      "marca": "Chevrolet",
    },
    {
      "id": "3",
      "marca": "Nissan",
    }
  ]

  usuario = {
    id: "1",
    nombre: "Alex",
    nick: "AleX",
    rol: "Admin"
  }

  fechaActual = new Date();
  precio = 2549.99;

  ngOnInit() {
    this.marcasAutos = []
  }
  cambiarRedirigir() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
