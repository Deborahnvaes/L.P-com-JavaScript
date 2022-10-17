//função com parametros e COM retorno
function somar (a,b){
    return a + b;
}

somar (30,56);

let resultado = somar(30,56);
console.log(`O resultado é: ${resultado}`);
console.log(`O resultado é: ${somar(30,56)}`);

// função com parametros e sem retorno

function exibirMultiplicacao(a,b){
    console.log(a * b);
}

exibirMultiplicacao(10,21);

//função sem parametro e com retorno
function retornarDataAtual (){
    return Date.now();
}

console.log(retornarDataAtual());
