import { Component } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";
import { Usuario } from "../usuario/usuario";
import { Ventas } from "../ventas/ventas";
import { Cuentas } from "../cuentas/cuentas";
import { Transacciones } from "../transacciones/transacciones";
import { Prestamos } from "../prestamos/prestamos";

@Component(
    {
        selector: "mi-producto",
        //Usando componentes importados
        imports:[
            Pelicula,
            Usuario,
            Ventas,
            Cuentas,
            Transacciones,
            Prestamos
        ],
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
