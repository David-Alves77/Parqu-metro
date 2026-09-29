import { Parquimetro} from "./classes.js";

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