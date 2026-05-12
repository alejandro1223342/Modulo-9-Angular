import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cine',
  imports: [FormsModule, NgStyle],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {

  
  public titulo: string;

  public peliculas: Array<Pelicula>;

  //atributo para mostrar con twoway data binding y formularios
  public mi_pelicula:string = "";

  public peliculasSinDatos: string[] = [];

  public color:string = "#FFFFFF";

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

  /*ngDoCheck(){
    console.log(this.mi_pelicula);
  }*/

  showPelicula(){
    alert(this.mi_pelicula)
  }

  addPelicula(){
    let identificador = this.peliculas.length + 1;
    let nuevaPelicula = new Pelicula(identificador,this.mi_pelicula);
    this.peliculas.push(nuevaPelicula)
  }

  borrarPelicula(indice:number){
    this.peliculas.splice(indice,1);
  }

  haciendoFoco(){
    console.warn('El input esta recibiendo el foco');
  }

  haciendoBlur(){
    console.warn('El input esta perdiendo el foco');
  }

  pulsandoTeclas(evento:KeyboardEvent){
    console.warn('Estas pulsando una tecla',evento.key);
  }

}
