//Function declaration 
console.log(soma(3,4))

function soma(x,y){ // essa função pode ser chamada antes de ser lida 
    return x + y
}

//Function Expression 

const sub = function(x,y){ // esssa função só pode ser chamada depois de ser declarada, ou seja, o console.log no caso, teria que ser em baixo
    return x - y
}
console.log(sub(3,4))
//Named Function Expression 

const mult = function mult(x,y){// essa também não vai funcionar antes de ser declarada 
    return x * y
}
console.log(mult(3,4))