


function executar (funcao){
    if(typeof funcao === "function"){
    console.log(funcao());
    }

}

function bomDia(){
    return "Bom dia"; //<-- parte central da aula
}
executar(3);
executar(bomDia);

const x = bomDia
const y = bomDia();

console.log(x());
console.log(y);