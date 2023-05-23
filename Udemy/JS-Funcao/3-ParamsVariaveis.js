function soma(){
    let soma=0
    for(i in arguments){
        soma += arguments[i]


    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
//até aqui saiu tudo supoer bem


console.log(soma(1.1,2.2,'teste'))// vai retornar como uma concatenação e retorna 3.300000000 devido a imprecisão do ponto flutuante 
console.log(soma('a','b','c'))// vai retornar como uma concatenação, porém como não tem numeros, o primeiro a aparecer vai ser o 0, por ter sido atribuido no let 