/*é uma estrutura de dados, que ajuda a armazenar varias informacoes 
em uma unica variável.
em javascript é uma estrutura dinamica que cresce e diminui,
em java por exemplo é uma estrutura estastica que não muda de tamanho
se voce criar uma estrutura de 10 tamanhos, ele só suportará 10 espaços.
em java a estrtura dinamica é a estrutura de lista assim como o array funciona 
no JS....
o Array tem uma estrutura indexada, ou seja, a forma que voce tem
p acessar os elementos é atravez de um numero, (um indice) o 
primeiro elemento sempre será o numero 0 ... o ultimo é o tamanho
do array - 1. Ou seja, 8 elementos e o ultimo é o 7 */

const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];
    console.log(notas);

//acessar a partir do indice
console.log(notas[3]);

//alterar o dado
notas[4] = 8.7;
console.log(notas);
