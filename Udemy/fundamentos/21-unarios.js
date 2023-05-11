let num1=1
let num2=2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // aqui vai ser igual pois ele compara primeiro, e depois diminui o num 2 
console.log(num1 === num2)// aqui vai ser diferente, pois agora sim os dois sao diferentes