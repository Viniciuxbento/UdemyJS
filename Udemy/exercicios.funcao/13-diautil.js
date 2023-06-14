const imprimirDia = function (util){

switch (Math.floor(util)){
    case 7: case 6:
        console.log("Não é dia util")
        break

        case 1: case 2: case 3: case 4: case 5:
            console.log("Dia útil")
            break
        default: 
        console.log("Dia invalido")
    
    }}

imprimirDia(8)
imprimirDia(4,5)
imprimirDia(1)
imprimirDia(4)
imprimirDia(4)
imprimirDia(6)
imprimirDia(3)
imprimirDia(7)

