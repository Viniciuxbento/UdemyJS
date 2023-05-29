//função anonima é uma função sem nome !!APENAS ISSO!

const soma = function (x, y) {
    return x + y
}

function ImprimirSoma(a, b, operacao = soma) {//atribuindo a variavel operacao a função SOMA 
    console.log(operacao(a, b))//ATRIBUINDO as variaveis a e b como parametro para função soma(porque agora "operacao" se tornou a função soma)
}

ImprimirSoma(4, 9)
ImprimirSoma(4, 9, soma)// se colocar a função soma depois não vai alterar em nada, pois ela ja foi usada e está sem parametros 
ImprimirSoma(4, 9, function (x, y) {// posso adcionar outra função anonima, para que retorne o outros valores 
    return x - y
})

ImprimirSoma(4, 9, (x, y) => x * y) // e posso tambem adcionar uma arrow function ( que obrigatoriamente é uma função anonima, pois não se pode nomea-la)

const pessoa = {
    falar: function () {
        console.log("Opa")
    }

}
pessoa.falar()

const otherpessoa ={
    dizer: ()=> (console.log("ola"))
}

otherpessoa.dizer()

