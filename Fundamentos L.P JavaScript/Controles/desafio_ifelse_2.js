const a = 10;
const b = 1;
const operacao = '*'; //+ - / %

let resultado;
//Usar as extruturas de repetição if... else if else da forma que quiser.

if (operacao === '+') {
    resultado = a + b;
} else if (operacao === '-') {
    resultado = a - b;
} else if (operacao === '*') {
    resultado = a * b;
} else if (operacao === '/') {
    resultado = a / b;
} else {
    (operacao === '%')
resultado = a % b;
}

console.log(resultado);