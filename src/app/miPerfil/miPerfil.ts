import { Component } from "@angular/core";
import { Cuentas } from "../cuentas/cuentas";
import { Transacciones } from "../components/transacciones/transacciones";
import { Prestamos } from "../components/prestamos/prestamos";

@Component(
    {
        selector: "mi-perfil",
        imports: [
            Cuentas,
            Transacciones,
            Prestamos
        ],
        templateUrl: "miPerfil.html",
        styleUrl: "miPerfil.css"
    }
)


export class miPerfil {
    //Definicion de propiedades de la clase
    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public telefono: number;
    public nombreCliente: string = "Juan Pérez";
    public mensajeRecibido: string = "";

    constructor() {
        this.nombre = "Alejandro";
        this.edad = 25;
        this.ocupacion = "Desarrollador Web";
        this.direccion = "Calle Falsa 123";
        this.telefono = 123456789;
        console.log("Se cargó el componente de perfil correctamente.")
    }

    ngDoCheck() {
        console.log("Componente Actualizado Perfil");
    }

    //Metodos de la clase
    cambiarEdad() {
        this.edad = 26;
    }
    cambiarDireccion() {
        this.direccion = "Calle Verdadera 456";
    }

    recibirMensaje(mensaje: string) {
        this.mensajeRecibido = mensaje;
    }

}
