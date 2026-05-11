import { Component } from "@angular/core";

@Component(
    {
        selector: "mi-producto",
        templateUrl:"producto.html" ,
        styleUrl: "producto.css"
    }
)


export class Producto{
    //Definicion de propiedades de la clase
    public nombre: string;
    public marca: string;
    public precio: number; 

    constructor(){
        this.nombre = "PC PORTATIL";
        this.marca = "Asus";
        this.precio = 457; 
        console.log("se ha cargado el componente de productos!");
        
    }
}
