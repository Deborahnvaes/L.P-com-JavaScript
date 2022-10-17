const notas =[7, 8, 3, 5, 10, 9, 8, 8];

//foreach = percorrer cada elemento até chegar no final do array

for(let nota of notas ) {
    console.log(nota);
} 

//vai repetir o laco for, a quantidade de elementos que tem no array, e para cada repetição a variável nota terá o valor atual.
// usando o of ele vai te da os valores, usando in ele vai te dar os indices
// percorrer os indices

let valores = ''
let indices = '';
for(let indice in notas){
    indices += indice + '-';
}
console.log(indices);



