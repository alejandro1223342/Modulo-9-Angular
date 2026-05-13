import { Component, signal } from '@angular/core';
//import { Producto } from "./producto/producto";
import { miPerfil } from "./miPerfil/miPerfil";
import { Usuario } from './components/usuario/usuario';
import { Prestamos } from './components/prestamos/prestamos';
import { Ventas } from './components/ventas/ventas';
import { config } from './models/config';
import { Cine } from './components/cine/cine';
import { Transacciones } from './components/transacciones/transacciones';
import { Cuentas } from './cuentas/cuentas';
import { Padre } from './components/padre/padre';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Cine, Transacciones, Prestamos, Padre, Cuentas, miPerfil, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi Primer proyecto Angular');

  titulo = config.title;
  descripcion = config.description;

}
