 //t1 é trabalho 1 t2 trabalho 2

 const t1 = true;
 const t2 = false;
 //se os valores forem constantes, ao inves de usar let usa o const.


 let comprarTv50 = t1 && t2; //and
 console.log('Vamos comprar a Tv 50"?', comprarTv50);
 
 let comprarTV32 = t1 !== t2; //xor
 console.log('Vamos comprar a Tv 32"?', comprarTV32);
 
 let TomarSorvete = t1 || t2;  //or //fazer a negação logica
 console.log('Vamos comprar o sorvete"?', TomarSorvete); 

 let ficarEmCasa = !TomarSorvete; //Not
 console.log('Vamos ficar em casa"?', ficarEmCasa);



