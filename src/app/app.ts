import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { Producto } from "./producto/producto";
import { miPerfil } from "./miPerfil/miPerfil";
import { Usuario } from './components/usuario/usuario';
import { Prestamos } from './prestamos/prestamos';
import { Ventas } from './components/ventas/ventas';
import { config } from './models/config';
import { Cine } from './components/cine/cine';
import { Transacciones } from './components/transacciones/transacciones';
import { Cuentas } from './cuentas/cuentas';

@Component({
  selector: 'app-root',
  imports: [Cuentas, Transacciones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi Primer proyecto Angular');
  
  titulo = config.title;
  descripcion = config.description;

}
