function tratarErroELancar(erro){ // funcao para o tratamento de erro e o atributo throw vai substituir a mensagem de erro -------E ABAIXO ALGUMAS FORMAS DE MENSAGEM 
    // throw new Error ('mensagem de erro')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{// objeto para mensagem de erro 
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
    

}



function imprimirNomegritado(obj){ // função para colocar letras em maiusculo 
    try {
        console.log(obj.name.toUpperCase()+ '!!!') // name / name colocados errados aqui ta name para gerar o erro AQUI ELE TENTA RODAR
    }catch (e){
        tratarErroELancar(e)// aqui ele chama o tratamento de erro caso tenha alguma coisa de errado 
    } finally{
        console.log("final") // depois de tudo com problema ou sem o atributo finally vai ser chamado 
    }
}

const obj = { nome:'Roberto'}// aqui ta nome 
imprimirNomeGritado(obj)