import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  nombreHijo: string = 'Componente Hijo';

  //decorador @Input() permite que el padre le envíe datos al hijo
  @Input() elNombreDeMiPadre: string = '';

  @Output() saludoHijo = new EventEmitter();

  enviarSaludo() {
    this.saludoHijo.emit("Hola como estas Padre?? saludos" );
  }
}
