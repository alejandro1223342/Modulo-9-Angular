import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine',
  imports: [],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {

  
  public titulo: string;

  public peliculas: Array<Pelicula>;

  constructor(){
    this.titulo = "Peliculas";
    this.peliculas = [
      new Pelicula(1, 'Interestelar', 'Ciencia Ficcion', 'Cristopher Nolan', 2014, 'HBO', true),
      new Pelicula(2, 'Inception', 'Ciencia Ficcion', 'Cristopher Nolan', 2010, 'HBO', true),
      new Pelicula(3, 'Interstellar', 'Ciencia Ficcion', 'Cristopher Nolan', 2014, 'HBO', true),
    ];
  }

  ngOnInit() {
    console.log(this.peliculas);
    this.peliculas[1].titulo = 'Spiderman';
  }

}
