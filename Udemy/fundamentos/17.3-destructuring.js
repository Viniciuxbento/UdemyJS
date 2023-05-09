function rand({ min = 0, max = 1000 }) { // aqui eu criei a função rand ( de random), e dentro dela eu coloquei chaves para não precisar usar o . para chamar um objeto, assim ja criando ele e atribuindo os valores 0 e 1000 ( max e min são "variaveis" criadas)
    const valor = Math.random() * (max - min) + min // fiz uma função para que o numero nferado fosse aleatório 
    return Math.floor(valor) //pedindo para retornar o valor
}
const obj = { max: 50, min: 40 } // adcionando os valores max e min denovo em outra const 
console.log(rand(obj))// chamando a função porem com a const obj, que tem max 50 e min 40 
console.log(rand({ min: 955 }))// chamando a func rand alterando o min = 955 e mantendo o max =1000
console.log(rand({})) // chamando a função rand mantendo o min = 0 e o max = 1000
//console.log(rand()) <------ esse código não vai funcionar, porque eu chamei a função (ok), porém não chamei o destructuring que criou as variaveis min=0 e max = 1000



// min=0 max= 1000
// parametros padrões 