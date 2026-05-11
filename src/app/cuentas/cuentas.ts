import { Component } from '@angular/core';

@Component({
  selector: 'app-cuentas',
  imports: [],
  templateUrl: './cuentas.html',
  styleUrl: './cuentas.css',
})
export class Cuentas {
    ngOnInit(){
    console.log("Se ha cargado el componente Cuentas");
  }

  ngOnDestroy(){
    console.log("Se ha eliminado el componente Cuentas");
  }
}
