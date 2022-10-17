
//exercicio básico para acessar uma data: dia, mês e ano


const data = {
    dia: 1,
    mes: 12,
    ano: 2020,

}

//console.log(data.dia);
//console.log(data.mes);
//console.log(data.ano);


// para alterar o valor dentro de um objeto:
data.dia = 27;
data.mes = 05;
data.ano = 2021;


// de uma forma que fique mais organizado, posso colocar o dolarpardechave:
console.log(`${data.dia}/${data.mes}/${data.ano}`);


/* embora o objeto seja uma constante, os atributos internos dá pra alterar...
o que não da para ser feito é, atibuir um outro objeto diferente dentro do atributo ja feito, por exemplo: dia = {} .. */















