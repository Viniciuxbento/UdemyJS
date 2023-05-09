function rand([min=0 , max = 1000]){ // diferente do anterior, ao inves de função, aqui é uma array
    if (min>max) [min , max] = [max,min] // caso o minimo seja maior que o maximo, um sera substituido pelo outro 
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)

}

console.log(rand([50, 40])) // como é array não precisa usar a variavel para declarar o valor 
console.log(rand([992]))// vai alterar o valor minimo 
console.log(rand([,10]))// vai alterar o valor maximo e o minimo vai coantinuar 0 
console.log(rand([])) // vai ultilizar os dois paramentros padrão 
//console.log(rand()) <-------- por não chamar a array não vai funcionar 