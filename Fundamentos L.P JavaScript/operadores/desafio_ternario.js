//fazer todas as operações usando expressao condicional

const a = 8;
const b = 2;
const operacao = '*';

const resultado = 
    operacao ===  '+' ? a + b : a / b; //exatamente igual ====
        operacao === '-' ? a - b : a / b;
            operacao === '*' ? a * b : a / b;
    
console.log (resultado);