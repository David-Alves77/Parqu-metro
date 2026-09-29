export const tarifas = [
    { valor: 1, tempo: 30},
    { valor: 1.75, tempo: 60},
    { valor: 3, tempo: 120}
];

export function obterTempos(tarifas) {
    return tarifas.map(item => item.tempo);
}

export function calcularTempoTotal(tarifas) {
    return tarifas.reduce((total, item) => {
        return total + item.tempo;
    }, 0);
}