let ComparaComThis = function (param) { // param temporario 
    console.log(this === param) // função para compararar o this com o parametro da função 
}

ComparaComThis(global)

const obj = {}//criando obj 
ComparaComThis = ComparaComThis.bind(obj)// chamando o this para o objeto 
ComparaComThis(global)
ComparaComThis(obj)

let ComparaComThisArrow = param => console.log(this===param)

ComparaComThisArrow(global)// em arrow ele da falso devido ao param criado na arrow ser desse mesmo modulo, ou seja, no módulo no qual ele foi criado 
ComparaComThisArrow(module.exports)// module exports, vai exportar o módulo atual e passar como parametro para função 

ComparaComThisArrow = ComparaComThisArrow.bind(obj)
ComparaComThisArrow(obj) // mesmo com bind, a arrow function não vai alterar o objeto, mantendo mesmo assim, o parametro (no caso)
ComparaComThisArrow(module.exports)// testando com module exports de novo, retorna true

// e isso é bom, pois não corro risco de mecher em algum objeto de escopo global