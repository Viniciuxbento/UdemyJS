let valorBase = 100
let valorTotal=0

function convenio(idade){
   
    if(idade > 0 && idade <= 10){
        valorTotal = valorBase + 80
        console.log(`A sua idade é ${idade}, portanto o valor total a ser pago é R$${valorTotal}`)

    } else if(idade>10 && idade <=30){
        valorTotal = valorBase + 50
        console.log(`A sua idade é ${idade}, portanto o valor total a ser pago é R$${valorTotal}`)
    } else if(idade>30 && idade <=60){
        valorTotal = valorBase + 95
        console.log(`A sua idade é ${idade}, portanto o valor total a ser pago é R$${valorTotal}`)
    } else if(idade>60){
        valorTotal = valorBase + 130
        console.log(`A sua idade é ${idade}, portanto o valor total a ser pago é R$${valorTotal}`)
    } else {
        valorTotal = 0
        console.log(`Nota Invalida`)
    }
    return valorTotal
    

   }
 
   

convenio(10)
convenio(7)
convenio(35)
convenio(70)
convenio(200)
convenio(0)
convenio(-1)
