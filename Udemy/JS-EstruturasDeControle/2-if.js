function teste1(num){
    if(num >7)
    console.log(num) // Apenas esse vai passar por o teste, a partir do momento que não tiver o uso das chaves
    console.log('Final')// Esse, pelo motivo de ficar fora, ele sempre sera executado depois, independente de TRUE ou FALSE
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{// os dois numeros serão mostrados, poiis foi colocado um ponto e virgula, como se houvessem parametros depois do if
        console.log(num)// esse bloco, por não estar associado a nada, vai apenas exibir o num, idependente de quantos tenham
    }
}

teste2(6)
teste2(8)