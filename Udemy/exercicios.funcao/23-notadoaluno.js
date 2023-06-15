function mediaDoAluno(codigo, nota1, nota2, nota3) {
    let peso1 = 4
    let peso2 = 3
    let peso3 = 3
    let calcnota1 = peso1 * nota1
    let calcnota2 = peso2 * nota2
    let calcnota3 = peso3 * nota3
    let somaNota = calcnota1 + calcnota2 + calcnota3
    let somaPeso = peso1 + peso2 + peso3

    let valorMedia = somaNota / somaPeso
    if (valorMedia >= 5) {
        console.log(`Aluno de código ${codigo}, sua média foi ${valorMedia}, portanto você foi APROVADO! `)

    } else {
        console.log(`Aluno de código ${codigo}, sua média foi ${valorMedia}, portanto você foi REPROVADO! `)
    }
}

mediaDoAluno(1, 7, 7, 8)
mediaDoAluno(2, 2, 1, 6)
mediaDoAluno(3, 1, 2, 8)
mediaDoAluno(4, 6, 4, 1)
mediaDoAluno(5, 10, 10, 10)