/* o fato do arrays ser um objeto
faz ele ter caracteristicas interessantes... por ex
podemos imaginar que objeto é uma pasta de pc, que voce
pode armazenar coisas, coisas que são funções e atributos, ou seja, dados
*/

console.log(typeof console);
console.log(typeof console.log);

const numeros = [1, 2, 3, 4];

console.log(typeof numeros);

//.push metodo necessaário que vai add novos elementos dentro do array
numeros.push(4);
numeros.push(5);
numeros.push(6);
numeros.push(7);
numeros.push(8);

console.log(numeros);

//quantos elementos tem dentro do array [.length]
console.log(numeros.length);



