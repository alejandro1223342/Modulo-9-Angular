import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  ngOnInit(){
    console.log("Se ha cargado el componente Pelicula");
  }

  ngOnDestroy(){
    console.log("Se ha eliminado el componente Pelicula");
  }
}
