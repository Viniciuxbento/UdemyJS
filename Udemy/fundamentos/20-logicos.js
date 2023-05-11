function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // 1 ou 2 se um ou outro 
    const comprarTv50 = trabalho1 && trabalho2 // tem que ter os dois 1 & 2 
    //const comprarTv32= !! (trabalho1 ^ trabalho2) bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2 //ou excluisivo igual o de cima

    const manterSaudavel = !comprarSorvete // para ser saldavel, não comprar sorvete

    return {comprarSorvete, comprarTv50,comprarTv32, manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(false,true))
console.log(compras(true,false))
console.log(compras(false,false))