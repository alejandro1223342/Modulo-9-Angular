import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
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
