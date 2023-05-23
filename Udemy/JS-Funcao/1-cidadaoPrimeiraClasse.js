//Funcão em JS é First-Class Objetct (Citizens)

//Higher-order function 
//---------------------------------------------------
//Função de modo literal 

function fun1(){}
//---------------------------------------------------
//Função armazenada na variavel 

const fun2= function(){}
//aqui a função é anonima e armazenada na variavel ( const)
// mas mesmo assim para chamar ela com a referencia da constante eu preciso usar os () no final do nome 
//---------------------------------------------------


//armazenar em array
const array = [function(a,b) {return a+b}]//da forma literal, adcionando a função e os parametros 
const array2= [fun1,fun2]//ou usar para armazenar outras funções ja atribuidas a outra variavel 
const array3 = [function(a,b) {return a+b},fun1,fun2]
//ou ambos os jeitos juntos 

console.log(array3[0](2,4))
//o [0] depois de array, ele vai chamar a primeira função, cujo o indice é 0 pois é aprimeira e vai fazer a soma 

//---------------------------------------------------
//Armazenando dentro de um objeto 

const obj = {}// criando variavel e atribuindo um objeto vazio
obj.falar=function(){// atribuindo a chave falar ao objeto e adcionando a função a ele 
    return 'Opa'
}
console.log(obj.falar())

//---------------------------------------------------
//Passar função como paramentro de outra função 

function run(fun){
    fun()// preciso desses parenteses para invocar a função 
}
run(function(){console.log('Executando...')})

//---------------------------------------------------
// Uma função pode retornar && conter uma função 
function soma( a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
//essa daqui ficou meio complexa não entendi muito bem, pesquisar depois 

//TAMBEM PODE SER 

const result=soma(2,3)

result(4)