import { Component } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";
import { Usuario } from "../usuario/usuario";
import { Ventas } from "../ventas/ventas";
import { Cuentas } from "../../cuentas/cuentas";
import { Transacciones } from "../transacciones/transacciones";
import { Prestamos } from "../prestamos/prestamos";

@Component(
    {
        selector: "mi-producto",
        //Usando componentes importados
        imports: [
            Pelicula,
            Usuario,
            Ventas,
            Cuentas,
            Transacciones,
            Prestamos
        ],
        templateUrl: "producto.html",
        styleUrl: "producto.css"
    }
)


export class Producto {
    //Definicion de propiedades de la clase
    public nombre: string;
    public marca: string;
    public precio: number;

    public mostrar_peliculas: boolean = true;

    public mostrar_cuentas: boolean = true;



    constructor() {
        this.nombre = "PC PORTATIL";
        this.marca = "Asus";
        this.precio = 457;
        console.log("se ha cargado el componente de productos!");

    }

    ngOnInit() {
        //Metodo que se ejecuta despues de construir la clase
        console.log("El componente Producto ha sido cargado");
    }

    ngAfterViewInit() {
        //Metodo que se ejecuta despues de inicializar la vista
        console.log("El componente Producto ha inicializado la vista");
    }

    ngDoCheck() {
        //Metodo que se ejecuta cuando detecta cambios en la clase
        console.log("El componente Producto ha detectado cambios");
    }

    cambiarNombre() {
        this.nombre = "Laptop Asus 177 h";
        this.marca = "Samsung";
        this.precio = 250;
    }

    ocultarPeliculas(valor: boolean) {
        this.mostrar_peliculas = valor;
    }

    ocultarCuentas(valor: boolean) {
        this.mostrar_cuentas = valor;
    }
}
