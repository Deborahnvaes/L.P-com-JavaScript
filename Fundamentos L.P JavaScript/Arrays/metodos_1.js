const numeros = [1, 2, 3, 4, 5, 8];

numeros.push(6); //para adcionar elementos dentro do array
console.log(numeros);

numeros[0] = 100; //para alterar o numero do elemento do array, no caso o numero 1 será o numero 100
console.log(numeros);

console.log(numeros.join(' - '));
// vai juntar todos os elementos a partir de um determinado simbolo que voce colocou 
console.log(numeros.concat(7, 8, 9));
// ela vai gerar um novo array, nao vai mexer no array que ja existe
console.log(numeros.includes(6));
//vai dizer se determinado elemento pertence ou nao ao array
console.log(numeros.indexOf());
// quando o indice de determinado elemento, se tiver mais de um elemento com mesmo numero, voce vai ter outro indexof que ele vai começar a olhar a partir do indice anterior ao numero, se ele nao encontrou o valor do indice, vai parecer o -1 significando que NAO EXISTE.
console.log(numeros.splice(1, 2));
console.log(numeros);
//remover elementos dentro do array, o primeiro parametro é o indice no qual voce quer trabalhar, e o segundo é a quantidade que voce quer excluir.
numeros.pop();
numeros.pop();
console.log(numeros.pop()); //remove o ultimo elemento do array e retorna o elemento caso voce queira saber qual foi.

//pop e slice(remove 1 ou mais) geram alteração no array 
