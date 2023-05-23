const notas = [5.6, 6.7, 8.1, 9.6, 7.4]

for(let i in notas){ // in serve para pegar os atributos da array e o i é uma "variavel" declarada 
    console.log(i, notas[i])
}

const pessoa = { // declarando um objeto 
nome: 'ana',
sobrenome:'silva',
idade: 23,
peso:`90 ${'kg'}`

}

for(let atributo in pessoa){// usando in novamente com a "varivael " atributo para pegar os itens de dentro do objeto pessoa 
    console.log(`${atributo} = ${pessoa[atributo]}`)// concatenando o atributo, que no caso vão ser ( nome, sobrenome, idade, peso) e depois pegando o item que tem dentro do atributo
}

// é interessante adcionar o let antesde atributo e i, para que a variavel fique apenas dentro do escopo da função 