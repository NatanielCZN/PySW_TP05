export class Transaccion {
    _id!: string;
    monedaOrigen!: string;
    cantidadOrigen!: number;
    monedaDestino!: string;
    cantidadDestino!: number;
    emailCliente!: string;
    tasaConversion!: number;

    calcularCantidadDestino(): void {
        this.cantidadDestino = this.cantidadOrigen * this.tasaConversion;
    }
}
