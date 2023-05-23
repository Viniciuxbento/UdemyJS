function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min // função para gerar o numero aleatório
    return Math.floor(valor) // pedindo para retornar um numero arredondado para baixo 
}
let opcao = 0 // criando o a variavel de opcao 

while (opcao != -1) { // vai ficar gerando numeros enquanto forem diferentes de -1 
    opcao = getInteiroAleatorioEntre(-1, 10) // atribuindo valores ao max e min , e mandando eles para o let opcao 
    console.log("A opção escolhida foi " + opcao)
}

console.log("Até a proxima!")// o resultado foi -1 e acabou a palhaçada toda kkkjs