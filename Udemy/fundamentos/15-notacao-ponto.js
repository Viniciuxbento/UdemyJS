console.log(Math.ceil(6.1))// Nesse caso o console é o objeto, e o log é a função dentro do objeto, e o ponto serve para chamar a função dentro do objeto

//Do mesmo jeito no Math que é o objeto e ceil que é uma função que arredonda o numero para cima 

const obj1 ={}// uma constante com o objeto 
obj1.nome='Bola' // aqui o ponto chamou a função ou parametro dentro do objeto, como ele não existia ele ja foi 'criado'

//obj1 ['nome'] = 'Bola2 <---- Aqui tambémm funciona, porém nesse exercicio falamos apenas sobre o oponto 

console.log(obj1.nome)// se o de cima estivesse ativado, apareceria no console log Bola2, porque alteraria o valor do objeto 

function Obj(nome) {
    this.nome = nome // this serve para se referir  ao objeto  que está na função
    this.exec = function(){
        console.log('Exec...')
        
    }
}