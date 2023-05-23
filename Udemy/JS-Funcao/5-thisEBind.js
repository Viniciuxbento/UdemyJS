const pessoa = {
    saudacao:"bom dia",
    falar(){
        console.log(this.saudacao)// o this vai chamar a chave do objeto no qual a função está alocada, caso remova o THIS a função não vai funcionar 
    }
}
pessoa.falar()

const falar= pessoa.falar 
falar()//não vai funcionar pois o objeto deixou de ser pessoa

const falar2 = pessoa.falar.bind(pessoa)
falar2() // agora ele funciona, pois o bind define de qual objeto eu quero chamar a função 