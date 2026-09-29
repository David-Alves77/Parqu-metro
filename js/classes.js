import {tarifas} from "./utils.js";

export class Parquimetro{

    constructor(valor) {
        this.valor = valor;
    }

    calcular() {

        if (this.valor < 1) {
            return {
                mensagem: "Valor insuficiente"
            };
        }

        const tarifa = [...tarifas]
            .reverse()
            .find(item => this.valor >= item.valor);

        return {
            tempo: tarifa.tempo,
            troco: this.valor - tarifa.valor
        };
    }
}
