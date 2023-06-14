function numJogo(novojogo) {
    let jogosAntigos = [10, 20, 8, 13, 41]
    let MelhoresJogos = 0
    let PiorJogo = 0
    let NovoJogo = novojogo

    if(novojogo.length > jogosAntigos.length){
        MelhoresJogos = +1
    }

    console.log(MelhoresJogos)
}

console.log(numJogo(32))