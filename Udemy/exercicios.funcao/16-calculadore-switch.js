function calculadora(a,b,c){

    switch (b){
        case  "-":
            console.log(a - c)
            break
            case  "+":
                console.log(a + c)
                break

                case  "/":

                console.log(a / c)
                break 

                default:console.log( "Operador invalido ")
    }


}
calculadora(10,"-",4)
calculadora(5,"+",6)
calculadora(21,"/",3)
calculadora(12,"*",2)