import { Component } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-ventas',
  imports: [Pelicula, NgClass,NgStyle],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {
  public colorear: boolean = false;
  public mostrar: string = "si";

  misEstilos= {
    'background-color': 'blue',
    'padding': '10px',
    'font-weight': 'bold',
    'font-style': 'italic',
    'font-family': 'Courier New, Courier, monospace'
  };
}
