for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

/*Quando o break é usado, quando chega na expressão
verdadeira, ele para de rodar o codigo e para.
Quando se usa  o continue ele continua rodando o codigo
mesmo que as expressões a seguir sejam falsas, no caso
enquando o 1 for <= 5 ele continuará rodando. O continue só é usando no caso do while e do for. No caso do swithc usa-se 
o break */

//continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}