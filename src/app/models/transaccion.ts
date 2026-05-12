export class Transaccion {
    constructor(
        public id: number,
        public fecha: Date,
        public description: string,
        public monto: number,
        public tipo: "ingreso" | "egreso"
    ) {}
}