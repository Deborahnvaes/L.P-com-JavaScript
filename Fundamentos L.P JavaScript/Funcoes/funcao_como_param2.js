
function executar(fn, n1 = 2, n2 = 10) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

executar(somar, 1, 2);
executar(subtrair, 10, 8);
executar(multiplicar, 10, 10);
executar(somar);
executar(subtrair);
executar(multiplicar);
