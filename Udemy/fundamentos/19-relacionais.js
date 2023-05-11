console.log('01', '1' == 1) // == pra saber se o valor é igual somente em forma 
console.log('02', '1' === 1)// saber se o valor é extreitamente igual forma e valor 
console.log('03', '3' != 3) //diferente forma
console.log('04', '3' !== 3)//diferente valor 

console.log('05', '3' < 2)//menor
console.log('06', '3' > 2)//maior
console.log('07', '3' <= 2)//menor igual
console.log('08', '3' >= 2)//maior igual

const d1 = new Date(0) // marco 0 de date é dia 1 de janeiro de 1970 
const d2 = new Date(0) // vai comparar a referencia de memoria, e assim se tornam falsos
console.log('09', d1 === d2) 
console.log('10', d1 == d2)
console.log('11', d1.getTime() === d2.getTime()) // get time tem as mesmas prioridades e os mesmo valores 

console.log('12', undefined == null)
console.log('13', undefined === null)
