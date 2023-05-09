// Literal de Objeto: 
const pessoa ={
    nome:"xxx",
    idade:8484,
    endereço:{
        Rua: fulana,
        Numero:24
    }

}

//Função construtora:

function Pessoa(nome, idade) { // função criada
    this.nome = nome;   //this serve para se referir ao objeto em que esta o codigo 
    this.idade = idade;
    this.falar = function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    };
  }
  
  const pessoa1 = new Pessoa("João", 30); 

//explicação
  const people = {
    nome: "João",
    idade: 30,
    falar: function() {
      console.log(`Olá, meu nome é ${this.nome}`); // o this chamou o nome de joão 
    }
  };
  
 people.falar(); // "Olá, meu nome é João"