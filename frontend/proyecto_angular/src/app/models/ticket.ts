import { Espectador } from "./espectador";

export class Ticket {
    _id!: string;
    precioTicket!: number;
    categoriaEspectador!: string;
    fechaCompra!: string;
    espectador!: Espectador;

    constructor(){
        const fechaActual = new Date();

        const dia = fechaActual.getDate();

        const mes = fechaActual.getMonth() + 1;

        const anio = fechaActual.getFullYear();

        this.fechaCompra = `${dia}-${mes}-${anio}`;
    }
}
