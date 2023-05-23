Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim // função pra dizer que tem que ser um numero e comparação 
}

const imprimirResultado = function (nota) {// variavel nota recebe a função entre, atribuindo os valores de inicio e fim
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')

    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.6)
imprimirResultado(-1)

