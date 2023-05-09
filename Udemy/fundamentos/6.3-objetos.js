console.log(typeof Object)// aqui vai ser uma função

console.log(typeof new Object())//aqui está sendo um objeto, pois new oject vai criar um novo objeto 
// não precisa de parenteses apenas no console log

const Cliente = function(){}
console.log(typeof Cliente) //função
console.log(typeof new Cliente)//objeto

class Produto{} // EcmaScript 2015
console.log(typeof Produto)//função
console.log(typeof new Produto)//objeto

// No caso a função/ const/ class
// vão definir os parametros ex: nome=nome idade=idade
// e quando chamar o objeto ( new) vai adcionar Lucas, 24


