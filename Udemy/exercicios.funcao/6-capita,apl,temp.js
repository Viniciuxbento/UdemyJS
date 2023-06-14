function juroSimples(capital,taxa,tempo){
    console.log(`Seu capital é de ${capital}, sua taxa de juros mensal é de ${taxa}, e você deixou rendendo por ${tempo} meses.`)
   const lucro =  capital * taxa * tempo 

   return lucro + capital

   
}

const valor = juroSimples(2000,0.05,3)

console.log(`Portanto seu o valor total da sua conta é de R$ ${valor}`)

//------------------------------------------------------
function juroComposto(capital,taxa,tempo){
    console.log(`Seu capital é de ${capital}, sua taxa de juros mensal é de ${taxa}, e você deixou rendendo por ${tempo} meses.`)
    const lucro2 = capital * Math.pow((1 + taxa), tempo) 
    return lucro2.toLocaleString({style: 'currency'})
}
//math.pow para usar o modo de elevação ao expoente

// tolocatestring para adcionar estilo currency que reduzira os numeros depois da casa 
const valor2 = juroComposto(2000,0.05,3)

console.log(`Portanto seu o valor total da sua conta é de R$ ${valor2}`)

