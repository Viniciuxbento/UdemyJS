//Notação Literal de Objetos ----JSON em outras aulas 

const prod1 = {} // eu deixei o objeto vazio pra ser atribuido algo depois
prod1.nome = "Celular Ultra mega" // aqui foi atribuido dentro da variavel, o objeto nome com a string
prod1.valor= 4999,98 // outro objeto/ ---------identificador--------
prod1['Desconto legal'] = 0.40 // da pra usar espaçoes nesse formato, porém é melhor evitar

console.log(prod1)

const prod2 = { // aqui os identificadores foram atribuidos diretamente dentro do objeto 

    nome: 'Camisa polo ', //Não esquecer da virgula no final 
    valor: 49.99 , // Não esquecer de usar PONTO FLUTUANTE ao invés de virgula no numero 
    cor:'preta'
}