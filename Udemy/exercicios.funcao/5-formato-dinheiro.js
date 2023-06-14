function dinheiro(a, b) {

    let total = a + b

    return total.toLocaleString('pt-BR',{  style:'currency',
    currency: 'BRL'})// para string local, muda para versão pt br, e usar a moeda BRL

}
console.log(dinheiro(0.324,0.15))