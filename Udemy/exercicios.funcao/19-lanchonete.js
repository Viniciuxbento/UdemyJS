function comanda(item, quantidade) {

    switch (item) {
        case 100:
            console.log(`Você consumiu ${quantidade} cachorros quentes , e o valor é R$${3.00* quantidade}`)
            break
        case 200:
            console.log(`Você consumiu ${quantidade} hamburgueres simples , e o valor é R$${4.00* quantidade}`)
            break
        case 300:
            console.log(`Você consumiu ${quantidade} cheese burguers  , e o valor é R$${5.50* quantidade}`)
            break
        case 400:
            console.log(`Você consumiu ${quantidade} baurus , e o valor é R$${7.50* quantidade}`)

            break

            default:console.log("Produto não existe")
    }
}

comanda(100,2)
comanda(200,3)
comanda(300,1)
comanda(400,5)
comanda(500,2)