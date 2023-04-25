//Função sem retorno -----------------------------------------------------------------------

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(4, 8) // se colcoar a penas um numero o outro se  dgsra UNDEFINED, gerando o retorno de NaN ( not a number) se colocar mais de um, vão ser considerados apenas os dois primeiros 

//Função com retorno -----------------------------------------------------------------------

function soma(a, b = 0){//o zero no final, serve pra caso algum numero esteja faltando na soma ele seja substituido por 0 ( pode ser qualquer numero) poderia ser também (a=0, b=1)
    return a+b
}

//console.log(soma(2,3))  <--- aqui eu chamei a função soma substituindo os valores 

console.log(soma(4))//<--- aqui o valor não retornou NaN porque eu usei o zero caso não haja numero (pode ser qualquer outro numero 0, 1, 2, 3, 4, 5, 6, 7, 8, etc...)
