function verificacao(nota){
    let notaCerta = arredondar(nota)
    if(notaCerta>= 40){
        console.log(`Sua nota foi ${notaCerta}, aluno aprovado!`)
        
    }else
        console.log(`Sua nota foi ${notaCerta}, aluno reprovado!`)

    
}

function arredondar(nota){
    if(nota > 35){
    if(nota % 5 > 2){
        return nota = nota + (5-(nota % 5))
    }else{
        return nota 
    }
}else { return nota}
}

verificacao(38)