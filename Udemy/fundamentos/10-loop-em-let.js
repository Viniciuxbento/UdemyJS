for(let i=0; i<10; i++){ //atribuições iguais a do exercicio anterior
    console.log(i)
}
console.log("i= ", i) // porém, como "LET" não é de escopo global, vai dar erro, porque ele foi atribuiudo por um valor dentro da função, fora do bloco ele não recebeu valor, ele se torna assim, "UNDEFINED"