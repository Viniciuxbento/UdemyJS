function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco: 4599,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

const carro = {preco: 49000, desc: 0.20}

console.log(getPreco.call(carro)) // traduzindo o call serve para chamar a função para o escopo global e conseguir usar os parametros 
console.log(getPreco.apply(carro))
//-------------------------------------------------------------------------
console.log(getPreco.call(carro, 0.17, '$')) // o primeiro a ser passado é o contexto ( no caso o objeto) e os seguintes são os parametros, no caso substitui o valor do imposto e a string que vem antes 
console.log(getPreco.apply(carro, [0.17, '$'])) // no caso do apply os parametros devem estasr dentro de um array para que funcione 
