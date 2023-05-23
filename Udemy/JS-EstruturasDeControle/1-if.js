function soBoaNoticia(nota){// nota é uma variavel
    if(nota >=7) {
        console.log("Aprovado.." + nota)
    }
}

soBoaNoticia(8.3)

function seForVerdadeEuFalo(valor){
    if(valor){// como valor não tem nenhum parametro de comparação, ele vai retornar algo, se o valor for TRUE(verdadeiro)
        console.log("É verdade..." + valor)
    }
}

seForVerdadeEuFalo()//false
seForVerdadeEuFalo(Null)//false
seForVerdadeEuFalo(undefined)//false
seForVerdadeEuFalo(NaN)//false
seForVerdadeEuFalo('')//string vazia false
seForVerdadeEuFalo(0)//false unico numero falso 
seForVerdadeEuFalo(-1)//true
seForVerdadeEuFalo(' ')//true, porque tem um espaço 
seForVerdadeEuFalo('?')//true
seForVerdadeEuFalo([])//true array vazia 
seForVerdadeEuFalo([1, 2])//true array com conteudo
seForVerdadeEuFalo({})//true objeto