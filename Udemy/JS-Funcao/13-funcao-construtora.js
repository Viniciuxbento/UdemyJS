function Carro(velocidadeMaxima=200, delta=5){// criando função e atribuindo velocidade maxima e minima como padrão para um carro 

    let velocidadeAtual = 0 // criando variavel para velocidade inicial
    
    this.acelerar = function(){ // função para "aceleração do carro"

        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){ // adcionando o this, para que a variavel que é usada apenas no escopo da função, possa ser usada fora do escopo da mesmsa 
        return velocidadeAtual
    }


}

const uno = new Carro() // criando novo carro 
uno.acelerar()//acelerando primeira vez 
uno.acelerar()//     - -   segunda vez 
uno.acelerar()//     - -   terceira vez 
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(300,20) // atribuindo novas velocidades padrão para "Carro"
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

// this vai servir para substituir let ou const- para tornar o item publico ( para ser usado fora do escopo)
