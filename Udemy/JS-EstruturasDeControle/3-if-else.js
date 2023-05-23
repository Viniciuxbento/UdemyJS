const ImprimirResultado = function(nota){
    if(nota>7){
        console.log("aprovado")
    }else{
        console.log('reprovado')
    }
   
}
ImprimirResultado(6)
ImprimirResultado(8)
ImprimirResultado('Epa..')// vai retornar reprovadom, pois o teste retornou false, pelo fato de JS ser fracamente tipada 