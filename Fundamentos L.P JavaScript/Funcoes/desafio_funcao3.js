const nota1 = 5.8;
const nota2 = 2.1;
const nota3 = 6.1;

/*calcular a media do aluno usando as duas maiores notas e no final mostrar
o status do aluno AP >=7 REC >= 4 < 6.9 REP < 3.9*/

//função para descobrir em qual variável está o valor minimo
function minimo(n1, n2) {
    if (n1 <= n2) {
        return n1;
    } else {
        return n2;
    }
    /*podemos substituir essa expressão por um operador ternário da seguinte forma
    return num1<= num2 ? num1 : num2; caso a expressao seja verdadeira retorne num 1 caso contrario num2
    */
}

console.log(minimo(nota1, nota2))

/* Para comparar 3 valores ja que a função ja recebe dois valores */

console.log(minimo(nota1, minimo(nota2, nota3)))

//criar função para calcular a média de 3 notas

function mediaDuasMaiores(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if (menorNota === n1) {
        return (n2 + n3) / 2
    } else if (menorNota === n2) {
        return (n1 + n3) / 2
    } else {
        return (n1 + n2) / 2
    }

}

//criar função para converter a média para um status

function mediaParaStatus(media){
    if(media >=7){
        return "Aprovado";
    } else if (media >= 4){
        return "Recuperação";
    } else {
        return "Reprovado";
    }    
}

const mediaFinal = mediaDuasMaiores(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é: ${statusFinal}!`);
