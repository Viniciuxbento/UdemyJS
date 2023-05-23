let contador = 1

while (contador <= 10) {
    console.log("numero= ", contador)
    contador++
}

for (let numero = 1; numero <= 10; numero++) {// aqui diferente do while, eu declaro a variavel, junto com o paramentro de comparação e ja adciono o numero ++
    console.log('numero=', numero)
}

const notas = [5.6, 6.7, 8.1, 9.6, 7.4]// declarando array 
    for(let i = 0; i < notas.length; i++) {//enquanto o comprimento da array, for maior que 0, ele vai mostrar os itens da array 
    console.log(`nota = ${notas[i]}`)
}


