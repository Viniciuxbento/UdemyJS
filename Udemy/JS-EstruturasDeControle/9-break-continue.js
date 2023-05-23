const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {//quando o x for igual a 5
        break// vai chamar o break


    }
    console.log(`${x}=${nums[x]}`)// concatenando o x que vai ser os indicadores da array e chamando o nums[x], que vai ser cada numero por vez 
}

for (let y in nums) {
    if (y == 5) {
        continue//quando chegou no 5 atributo ele pulou, e logo em seguida dando continuidade 
    }
    console.log(`${y} = ${nums[y]}`)
}

// ele age no laço corrente mais proximo, ou seja como o if não suporta ( break e continue), ele vai ir pro mais proximo que suporta, que no caso é "for"

//break = while, for, switch 

//continue= apenas em extruturas de repetição


externo: for (a in nums){
    for (b in nums){// chamou os dois para procurar na array 
        if(a==2 && b==3)// como usou a função &&, os dois vão sair juntos 
            break externo// chamando break para o rotulo "externo", porque se não o break serai apenas para o primeiro for 
            console.log(`Par = ${a},${b}`)
        
    }
}

console.log('Fim')