

const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function(){ //métodos, funções dentro de um produto
        return this.preco * ( 1 - this.desconto);
    }
};

//acessar os atributos
//console.log(produto.nome da chave);

/* calcular o preco com desconto: 1 - desconto * pelo preço 0.85 * 5600
preco * ( 1 - desconto ) -> colocar os parenteses por causa da procedencia */

//acessar a função dentro de um objeto "Metodo que pertence a um produto"
console.log (produto.precoComDesconto());

// -> THIS é a palavra usada em javascrip e java para se referenciar a si mesmo. Em outras palavras pode ser usado o SELF
// -> this.nome -> forma de acessar o nome que pertence ao this
// -> objeto é composto por atributos e comportamentos, métodos.
// -> atributos e métodos podem tambem ser chamados de membros.
// -> Pode-se ter um atributo vazio, ter um objeto que só tenha comportamento, objeto que so tenha atributos e objetos com atributos e comportamento.
// -> o javascrip EXIGE que você use o THIS; Diferente em java por exemplo.




