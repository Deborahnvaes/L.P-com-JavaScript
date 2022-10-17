/*
Conteito ---- faixa de Notas
A        -->  ENTRE 9,0 E 10,0
B        -->  ENTRE 7,0 E 8,9
C        -->  ENTRE 5,0 E 6,9
D        -->  ENTRE 4,5 E 4,9
F        -->  ABAIXO DE 4,5
*/

const nota = 9

if (nota <= 10 && nota >= 9) 
    console.log('Conceito A');

if (nota >= 7 && nota <= 8.9) 
    console.log('Conceito B');

if (nota >= 5 && nota <= 6.9) 
    console.log('Conceito C');

if (nota >= 4.5 && nota <= 4.9) 
    console.log('Conceito D');

if (nota >= 0 && nota < 4.5) {
    console.log('Conceito F');
}











