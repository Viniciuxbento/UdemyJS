const funcs=[] // array sem declaração 

for(var i=0; i<10; i++){ //de 1 até 9 acrescentando numero gradualmente 
    funcs.push(function(){ //aqui adciona ao funcs usando PUSH os numeros graduais 
        console.log(i)
    })
}

funcs[2]() // ele não vai mostrar o 3 numero pois não funciona COM VAR (APENAS COM LET)
funcs[8]() //iden