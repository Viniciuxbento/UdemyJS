function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1//aqui pode começar com -1 , porque primeiro ele vai gerar o numero aleatório e depois fará o teste 

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log("A opção escolhida foi" + opcao)
}while (opcao != -1)// a unica diferença é colocar o while depois  e adcionar o do no começo do bloco

console.log('Até a proxima')

//Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:

//Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.