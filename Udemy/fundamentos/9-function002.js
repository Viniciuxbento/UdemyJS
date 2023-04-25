//Armazenando uma função em uma variavel

const imprimirSoma = function (a , b) {// coloquei o nome da função como nome da variavel, atribui os objetos a, b
    console.log(a + b) // chamei no console a soma 
}

imprimirSoma(2, 5)// chamei a função/var atribuindo os valores

//Armazenamento na arrow function 

const soma = (a,b) => { // iden o de cima, a função arrow (flecha), substitui o comando ---FUNCTION---
    return (a+b)
}

// retorno implicito arrow function 

const subtracao = (a,b) => (a-b) // a arrow function tambem vai substituir a abertura do bloco e o comando ---RETURN---

console.log(subtracao(9, 7))//adc valores