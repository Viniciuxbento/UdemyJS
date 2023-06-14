function criarProduto(nome,valor){
    return{
        nome,
        valor,
        desconto:0.1 // valor dee desconto por padrão 

    }
}
console.log(criarProduto("Lapis", 38.90))
console.log(criarProduto("Caneta", 19.50))