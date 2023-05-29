const notas = [7.7, 6.5, 5.3, 8.9, 3.6, 7.1, 9.0]

//sem callback

let notasBaixas = []

for ( let i in notas){ //let i (indice) de notas 
    if(notas[i]<7){// se a nota de determinado indice for menor que 7, então...
        notasBaixas.push(notas[i])//notasBaixas vai puxar a nota e o indice

    }
}

console.log(notasBaixas)

//Com CallBack

const notasBaixas2 = notas.filter(function (nota){// usando a função filter, e incluindo nela uma nova função com o parametro nota que vai retornar as notas menores que 7
    return nota<7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter((nota)=> nota<7)

console.log(notasBaixas3)