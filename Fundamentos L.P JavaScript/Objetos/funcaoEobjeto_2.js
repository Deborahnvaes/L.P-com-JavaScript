/* quando usamos a palavra new dentro de uma função essa ela passa a ser uma 
função construtora  porque essa função sera resp por construir um objeto
e cada vez que voce chamar vai ser criar um novo objeto
uma função construtora em outras linguagens em PHP E JAVA por exemplo é chamada de CLASSE
Normalmente em javaScript uma função construtora inicia-se a primeira letra em maiúscula
*/ 

function Produto(){
    console.log(this);
}

 /* 
 usando o new junto com o nome da função o this muda totalmente
 vai imprimir o objeto produto
 codd:

    function Produto(){
    console.log(this);
    }
    new Produto();

execultar para teste; a saída será: produto {} -> um objeto 

    function Produto(){
    console.log(this);
    }
    const p1 = new Produto()
    console.log(typeof p1);

execultando a saida será: object 

*/


function Data(dia = 1, mes = 1, ano = 2022){
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
 }//funcao que cria objeto

const d1 = new Data();
const d2 = new Data(24,12,2022);
const d3 = new Data(31,12,2021);

console.log (typeof d1); // se trata de um objeto
console.log (d1);
console.log (d2);
console.log (d3);







