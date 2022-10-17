/*desafio, percorrer os valores de trás pra frente 
começando do numero 9 e pulando de 2 em 2*/


const numeros = [1,2,3,4,5,6,7,8,9,10];

for(let i = numeros.length - 2; i >= 0; i -= 2){
    console.log(numeros[i]);
}
/*O i está recebendo o numero do array.. para acessar o ultimo elemento
eu tenho que pegar o tamanho do array [length] - 2 pois eu quero acessar
o penultimo, se fosse o ultimo seria lenght - 1, sendo assim o i está começando do 
numero 9. o valor de i tem que ser MAIOR OU IGUAL A ZERO porque
ele vai percorrer/tentar até o ultimo elemento e o decremento tem que ser uma atribuição subtrativa de dois em dois.*/