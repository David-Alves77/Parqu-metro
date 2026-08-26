class Parquimetro {

    constructor(valor) {
        this.valor = valor;
    }

    calcular() {

        if (this.valor < 1) {
            return {
                mensagem: "Valor insuficiente"
            };
        }

        if (this.valor < 1.75) {
            return {
                tempo: 30,
                troco: this.valor - 1
            };
        }

        if (this.valor < 3) {
            return {
                tempo: 60,
                troco: this.valor - 1.75
            };
        }

        return {
            tempo: 120,
            troco: this.valor - 3
        };
    }
}


document.getElementById("calcular").addEventListener("click", function () {

    const valor = Number(document.getElementById("valor").value);

    const parquimetro = new Parquimetro(valor);

    const resultado = parquimetro.calcular();

    const tempo = document.getElementById("tempo");
    const troco = document.getElementById("troco");

    if (resultado.mensagem) {

        tempo.textContent = resultado.mensagem;
        troco.textContent = "";

    } else {

        tempo.textContent = `Tempo: ${resultado.tempo} minutos`;

        troco.textContent =
            `Troco: R$ ${resultado.troco.toFixed(2)}`;
    }

});