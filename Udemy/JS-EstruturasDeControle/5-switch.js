const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {// math.floor serve para arredondar para baixo o valor atribuido à nota

        case 10://como ia se repetir com o de baixo, não é necessario ultilizar o console.log de novo, o java script ja reconhece 
        case 9:
            console.log("Quadro de Honra")
            break // se não ultilizar o break quando quiser parar, ele vai executar todos os outros cases que vem em seguida (fall-trought)

        case 8: case 7://pode ser em linha reta 
            console.log("Aprovado")
            break

        case 6: case 5: case 4:
            console.log("Recuperação")
            break

        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:// default é como se fosse o ELSE, caso nenhuma á cima traga o resultado positivo
            console.log("Nota Invalida")
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

//não é expressão relacional = que retorna true ou false
// é um modo de seleção multipla
//default não é obrigado a ser no final, porem depois dele deve ter um break 
