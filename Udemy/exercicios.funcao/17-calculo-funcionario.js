function calculoSalario(a, b) {
    let salario = a
    if (b === "A") {
        salario = salario / 100 * 10;

    } else if (b === "B") {
        
            salario = salario / 100 * 15;}
        else if (b === "C"){
            salario = salario / 100 * 20;}
            return salario
        
    }

  function calculo (a,b){
    switch (b){
        case "A":
            
            console.log( a = a/ 100 * 10)
            break
            case "B":

            console.log( a = a/ 100 * 15)

            break
            case "C":
                console.log( a = a/ 100 * 20)
                break

                default: console.log("Plano invalido")
    }
  }

  calculo(2100,"A")
  calculo(2100,"B")
  calculo(2100,"C")
  calculo(2100,"D")
