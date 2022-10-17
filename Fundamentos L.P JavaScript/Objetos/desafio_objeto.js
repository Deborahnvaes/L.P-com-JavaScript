/*criar um objeto do tipo data que vai ter 3 atributos, dia mes e ano e 
 dentro do objeto metodo exibir -> vai retornar uma string com o dia mes e ano */

const dataNasc = {
    dia: 13,
    mes: 11,
    ano: 1993,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
console.log(dataNasc.exibir());

/* para mudar alguma informação

dataNasc.atributoquevocequermudar = */