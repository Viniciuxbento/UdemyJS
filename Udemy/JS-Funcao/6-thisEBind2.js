function Pessoa() {// criando função pessoa
    this.idade = 0 // atribuindo valor ao objeto

    setInterval(function () {//set interval para fazer algo duranto o intervalo determinado em MiliSegundos
        this.idade++
        console.log(this.idade)// pedindo para mostrar no console
    }.bind(this), 1000) // bind para chamar o this e 1000 que é a quantidade de milisegundos 
}

new Pessoa //criando o bjeto 

//--------------------------------------------------
function Pessoa() {// criando função pessoa
    this.idade = 0 // atribuindo valor ao objeto 

    const self = this // atribuindo this a const

    setInterval(function () {//set interval para fazer algo duranto o intervalo determinado em MiliSegundos
        self.idade++
        console.log(self.idade)// pedindo para mostrar no console
    }, 1000)
}

new Pessoa //criando o bjeto 