//par nome/ valor
// chave /valor
// identificador/valor

const saudacao ='Opa' // contexto léxico 1, ou seja aqui foi declarada uma string à variavel

function exec(){
    const saudacao ='Falaa'// contexto léxico 2 , ou seja, aqui esta dentro da função a mesma variavel, por isso não vai gerar conflito 
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente={//objeto cliente
    nome:"Pedro",
    idade:32,
    peso:90,
     // Do mesmo jeito aqui, o objeto está aninhado, o nome das propriedades poderiam ser as mesmas sem gerar conflito 
    endereco:{//objeto endereço
        logradouro:'Rua Chesquedele',
        peso:321,
    }
}

console.log(cliente)// se chamar no console log, tanto o peso forta do aninhamento quanto o de dentro do aninhamento, serão separados, e mostraram cada um o seu respectivo valor 