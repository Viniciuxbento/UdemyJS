let valor //Não foi atribuido nenhum valor, assim o valor é UNDEFINED 

console.log(valor)

let algo = null

console.log(algo)// a variavel recebe um valor, porém esse valor não aponta pra nenhum endereço, sendo assim NULL 
//-----------------------------------------------------------------------------------------
//-----UNDEFINED---= a variavel foi criada porém não atribuido valor, inicializada 

//-----NULL -------= foi iniciada e atribuido o valor (Null), porém o valor Null não aponta pra nenhum endereço 

//obs: O null é usado para ZERAR o valor de uma variavel

const produto = {}

console.log(produto.preco)// undefined porque o preco não foi atribuido ao objeto produto
console.log(produto)// apenas espaço vazio 


produto.preco = 3.50  // o valor foi atribuido e agora ele retorna o valor 
console.log(produto.preco) 

produto.preco = undefined // não usar 
console.log(!!produto.preco)// pra ver que transforma objeto em boolean
console.log(produto)

produto.preco = null // agora sim você coloca o valor como nulo (é melhor usar o 0)
console.log(!!produto.preco)
console.log(produto)