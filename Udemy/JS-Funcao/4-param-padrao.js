//Estrategia 1 para gerar valor padrão 
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//Estrategias 2, 3 e 4 para gerar valor padrão 

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se A for undefined, então a recebe 1
    b = 1 in arguments ? b : 1 // se o parametro 1 nos argumentos (b), for nulo recebe 1
    c = isNaN(c) ? 1 : c// se c for NaN ele recebe 1, caso contrario recebe o C

    return a + b + c

}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
