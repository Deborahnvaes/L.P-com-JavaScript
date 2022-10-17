// a função vai definir um bloco de código
// depois da palavra function, o segundo passo é escolher o nome da função, de pref usando camelcase
// depois do nome da função é OBRIGATÓRIO o uso dos '()'
// para chamar a função voce, escreve o nome da função e logo depois usa o ();
// voce pode chamar a função quantas vezes vc quiser a partir do nome
// ESCOLHA BONS NOMES DA FUNÇÃO
// ler livro clean code
//dentro dos parenteses depois do nome da função nós definimos os parametros que a gente queira sendo separados por ,
//
const d1 = 02;
const m1 = 11;
const a1 = 2022;

function exibirData1() {
    console.log(`${d1}/${m1}/${a1}`);
}

const d2 = 05;
const m2 = 12;
const a2 = 2023;

function exbibirData2() {
    console.log(`${d2}/${m2}/${a2}`);
}
exibirData1();
console.log("---------");
exbibirData2();
