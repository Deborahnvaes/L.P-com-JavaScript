//o switch é pra quando existe multiplas seleções mas a expressão (...) não é verdadeira ou falsa

let nota = 2.5;

switch(Math.ceil (nota) ) {
    case 10: case 9: case 8: case 7:
        console.log('Parabéns, você foi aprovado!');
        break;
    case 6: case 5: case 4:
        console.log('Você está em recuperação');
        break;
    case 3: case 2: case 1:
        console.log('Você está reprovado!');
        break;
    default:
       console.log('essa nota não existe!')
}
