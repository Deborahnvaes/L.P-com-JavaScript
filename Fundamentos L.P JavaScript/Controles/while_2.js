let quantidade = 0;
//inderteminadas repetições
while (Math.random() < 0.40) {
    quantidade++;
}

console.log('qntd: ' + quantidade);

/* sempre quando for usado o math.random () os numeros sorteados 
aleatoriamente serão entre 0 e 1, o 0 sempre vai ser gerado indo até o 0.99999...
mas o 1 não será gerado!
--> quando a expressao é falsa, ele nao gera nada
enquanto a expressao for verdadeira, execulte, falsa parou.*/



