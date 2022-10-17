let temDinheiro = true;
let estaEnsolarado = false;
let carroGaragem =  true;

let resultadoE = '# 1. (AND) - Vai pro shoping?';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOu = '#2. (OR) - vai pro shoping?';
resultadoOu += estaEnsolarado || carroGaragem;
console.log(resultadoOu);

console.log (true != true); // OU EXCLUSIVO SE USAR O ^ DARÁ RESULTADO 0 OU 1. 0 Falso 1 verdadeiro
console.log (true != false);
console.log (false != true);
console.log (false != false);
// pode usar o extritamente diferente para garantir que está trabalhando somente com valores do mesmo TIPO (boleanos)
console.log (true !== true);
console.log (true !== false);
console.log (false !== true);
console.log (false !== false);


//operador unario logico de negacao (not)

console.log('nao verdadeiro:' + !true);
console.log(' nao falso: ' + !false);















