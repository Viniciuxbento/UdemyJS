const valor = 'Global'

function minhaFuncao(){
    console.log(valor) 
}

function exec (){
    const valor = 'Local'
    minhaFuncao() // por chamar minha função, que está fora desse eccopo ( contexto ) , o valor que vai retornar vai ser o global, que está dentro do contexto da funcao "minhaFuncao"
}

exec()