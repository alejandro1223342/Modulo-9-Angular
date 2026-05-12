import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cambiaLetras'
})
export class CambiaLetras implements PipeTransform {
    transform(value: string, mayus: boolean): string {
        let resultado = value.replaceAll("e", "3").replaceAll("i", "1");

        if (mayus) {
            resultado = resultado.toUpperCase();
        }

        return resultado;
    }
}


@Pipe({
    name: 'ascii'
})
export class cambiaLetrasASCII implements PipeTransform {
    transform(value: string): string {
        let resultado = "";
        for (let i = 0; i < value.length; i++) {
            resultado += value[i].charCodeAt(0) + " ";
        }
        return resultado.trim();
    }
}

