const [a] = [10] // usou destructuring criou a variavel a e atribuiu 10 à ela
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// as variaveis n2 e n4 ficaram sem nome, ou seja, foram puladas, pois entre as virgulas existe um espaço , a n5 vai ser undefined, pois foram atribuidos 4 numeros, que por ordem foram saciados, chegando na vez do n5 sem nenhum numero para atribuir à ele!
//ja o n6 foi atribuido dentro do cochete em que declarou o nome das variaveis

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)

//existem duas arrays dentro de uma array
//a primeira array interna é ignorada
//exibe a segunda array interna, e nela, o primeiro elemento é ignorado com o uso da virgula
