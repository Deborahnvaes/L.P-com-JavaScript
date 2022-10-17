//Com base no exercicio passado, vou supor que quero ter várias datas, de uma forma simplificada sem duplicação no codigo

function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function () {
            return `${this.dia}-${this.mes}-${this.ano}`
        }
    };

}

const d1 = criarData(9,10,2010);
const d2 = criarData(22,11,2023);
const d3 = criarData(3,04,2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

/* fazendo simplificações:
quando o parametro tem o mesmo no do atributo, nesse cado pode tirar o valor e deixar apenas com a ( , )

function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir: function () {
            return `${this.dia}-${this.mes}-${this.ano}`
        }
    };

}
execultando, vai da exatamente a mesma saída

a outra simplificação seria:
function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir() {
            return `${this.dia}-${this.mes}-${this.ano}`
        }
    };

}
*/