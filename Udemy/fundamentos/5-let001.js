var numero=1  // aqui atribui valor a variavel 

{
    let numero=2 // aqui mudei 
    console.log("dentro= ", numero) //aqui retorna 2, porque foi atribuido outro valor através de let
}

console.log("fora =", numero) // aqui, pelo fato de ter usado "let" ao invés de "var", ele vai retornar "1 ", porque diferente de var, o let, não é de escopo global

// porem, o let busca fora do bloco também, mas ele vai retornar a mais "perto" do bloco 


{
    let nada
    {
        let nada =1   // no caso como a primeira não tem ele usaria essa 
        {
            let nada // não foi atribuido valor
        }
    }
}