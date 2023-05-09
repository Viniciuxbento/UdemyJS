const pessoa = { //criado o objeto 
    nome:'Ana',//chaves e valores ja atribuidos 
    idade:5,
    endereco:{ //aninhamento do objeto endereco 
        logradouro:'Rua ABC',
        numero: 1000
    }
}

const {nome,idade}=pessoa //As chaves depois da Const, significam o Distructuring, ou seja, ele vai retirar da constante o nome e a idade o simbolo de = esta dizendo de qual const serão retirados.

console.log(nome, idade)// como eu chamei pro escopo global à cima, no console log eu consigo ver 

//--------------------------------------------------------

const{nome: n, idade:i}=pessoa// eu retirei as chaves do objeto, transformando elas em variaveis, no caso n & i , para o escopo global 
console.log(n,i)// se chamar no console, vão ser exibidos os respectivos nome e idade
//------------------------------------------------------
const {sobrenome , bemHumorada=true}=pessoa// eu puchei duas chaves que não existem dentro do objeto, porém ela foi criada, e definida como undefined e a outra como true, ja que coloquei isso no Destructuring 
console.log(sobrenome, bemHumorada)
//======================================================
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
// aqui eu peguei as chaves aninhadas no objeto endereco, e como o cep não havia sido declarado, ele retorna undefined no console 

const{conta:{ agencia, numConta}} = pessoa
console.log(agencia, numConta) //vai dar erro, porque o caminho ( o objeto tem que ter sido declarado) apenas as ultimas chaves que podem ser undefineds