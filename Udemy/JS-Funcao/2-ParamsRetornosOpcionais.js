function area(largura, altura) {
    const area1 = largura * altura
    if (area1 > 20) {
        console.log(`Valor a cima do permitido: ${area1}m2`)
    }
    else {
        return area1

    }
}

console.log(area(1,7))
console.log(area(5,5))
console.log(area(2))// vai retornar NaN, Pois um numero vezes undefined retorna NaN
console.log(area()) // vai retornar NaN
console.log(area(2,15,5,4,3))//vai usar apenas os dois primeiros valores 