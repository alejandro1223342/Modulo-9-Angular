import { Component } from "@angular/core";

@Component(
    {
        selector: "mi-perfil",
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
    
    
    constructor() {
        this.nombre = "Alejandro";
        this.edad = 25;
        this.ocupacion = "Desarrollador Web";
        this.direccion = "Calle Falsa 123";
        this.telefono = 123456789;
        console.log("Se cargó el componente de perfil correctamente.")
    }
}
