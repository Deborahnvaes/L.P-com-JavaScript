const numeros =[1,2,3,4,5,6];

// metodos para percorrer um array de numeros
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

for(let n of numeros){
    console.log(n);
}

numeros.forEach(function(){
    console.log('Dentro do forEach!')
}); // para cada elementro dentro do array ele vai chamar a função que passamos como parâmetro

// separar a função:
 function paraCadaElemento(){
    console.log('Dentro do forEach..')
 }
 numeros.forEach(paraCadaElemento);
// os parametros para o for.Each -> 1º o valor (elemento) que ele está percorrendo (valores do array), 2º Indice, 3º array completo 

function paraCadaelemento(elemento, Indice, array){
    console.log(elemento, Indice, array);
} //percorrer todos os valores de uma vez só.
numeros.forEach(paraCadaelemento);
// se nao precisar do indice, porque o seg paramentro é obriatório, então colocamos o 'i'... Mas podemos deixar apenas o ELEMENTO.







