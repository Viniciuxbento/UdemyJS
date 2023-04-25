const valores =[7.7,8.9,6.3,9.2]
console.log(valores[0], valores [3])
console.log(valores[4])// aqui a posição [4] não existia, retorna !undefined!

valores[4]=10/// aqui foi atribuido o valor pra essa posição 
console.log(valores)
console.log(valores.length) // o comando length mostra quantas posições tem no array 

valores.push({id:3}, false, true, "texto") // aqui foram atribuidos alguns obj, booleans, string pra mostrar que no array pode se colocar qualquer tipo de coisa 
console.log(valores)

console.log(valores.pop())//a função pop vai retornar o ultimo comando da array, nesse caso a string "texto"

delete valores[0]// a função delete serve pra remover o item da casa selecionada

console.log(valores)

console.log(typeof valores)//apenas pra ver o tipo da array que é OBJECT
