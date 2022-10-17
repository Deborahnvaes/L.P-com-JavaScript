//como definir um objeto mais rico em termos de informações
// criando um objeto literal:
const cliente = {
    nome: 'Ana',
    codigo: 16532,
    vip: true, //-> valor tipo boll
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'APT 601 BLOBO C',
        pontosRef: [ //posso ter um array dentro de um objeto
            {nome: 'hospital x', muitoProximo: true},
            {nome: 'shopping y', muitoProximo: false},
        ]
    },
//posso tambem ter outro atributo de referencia, construido com array:
    nomeFilhos: [
        'bia', 'carlos', 'Luiz'
    ]
};


//acessar os atributos usando a notação (cochetes)
console.log(cliente['endereco']['logradouro']);

//acessar os atributos usando a notação (ponto)
console.log(cliente.endereco.pontosRef[1].muitoProximo); //o numero dentro dos cochetes, é o indice dos arrays, o indice 0 será o hospital e o indice 1 o shopping.










