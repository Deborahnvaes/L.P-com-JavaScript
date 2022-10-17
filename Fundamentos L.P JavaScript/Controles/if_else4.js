const hora = 22
let saudacao;

if (hora < 12){
    saudacao = 'Bom dia';
} else if (hora < 18)
    saudacao = 'Boa tarde'
 else if ( hora < 22){
    saudacao = ' Boa noite ';
} else {
    saudacao = 'muito tarde';
}
console.log(saudacao); 

/*uma sentença, um bloco e um if/else são visto como UMA UNIDADE
ELSE/IF --> CASO CONTRÁRIO
QUANDO ESTÃO AGRUPADOS, 
QUANDO 1 BLOCO DE NOTAS É EXECULTADO, 
NENHUM MAIS SERÁ, POIS SO PODE SER EXECULTADO UMA SENTENCA E UM BLOCO A CADA ESTRUTURA.
DEPOIS DA CONDIÇÃO DO IF, 
PARA EU TER OUTRA OPÇÃO EU PRECISO, 
COLOCAR O ELSE IF, SE EU QUISER 
ACABAR O BLOCO, COLOCA SOMENTE O ELSE, QUANDO SE TEM UM ELSE FINAL,
OBRIGATORIAMENTE ELE VAI CAIR EM ALGUM CASO, SE ELE NAO CAIR EM NENHUM ANTERIOR, AUTOMATICAMENTE
ELE VAI CAIR NO ULTIMO */