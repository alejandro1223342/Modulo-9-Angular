import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { Producto } from "./producto/producto";
import { miPerfil } from "./miPerfil/miPerfil";
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [Usuario, miPerfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi Primer proyecto Angular');
}
