var numero =1 //aqui declarei a variavel fora do bloco

{
    var numero=2 // aqui atlterei o valor dentro do bloco
    
    console.log("dentro = ", numero) // o valor foi alterado para 2 dentro do bloco

}

console.log("fora = ", numero) // e pelo fato de a variavel ser de escopo global, aqui fora do bloco, ela também se tornopu "2" que foi o numero alterado dentro do bloco 
