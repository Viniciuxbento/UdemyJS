let a = 3

global.b = 123 // global quer dizer meio que uma variavel global

this.c = 456 // this serve para criar uma "variavel"
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)//global procura no global
console.log(this.c)// this chama ela 
console.log(module.exports.c)
console.log(module.exports === this) //module exports é igual this 
console.log(module.exports) // e se chamnar somento o module . exports, vão ser mostradars todas as variaveis globasis

abc=3//variavel sem ser em VAR ou LET maluquisseee
console.log(global.let)//não usar isso nunca

//module.exports = { e:543, f: false, g:'teste'}
//assim adciona novos parametros e novas variaveis, geralmente usado em node 