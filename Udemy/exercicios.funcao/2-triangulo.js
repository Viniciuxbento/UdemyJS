function tipoTriangulo(a, b, c) {
    if (a == b && b == c) {
        return "Triangulo equilatero!" // erro que cometi, usar console log no return!
    } else if (a == b || b == c || c == a) {
        return "Triangulo Isóceles!"

    } else{
        return "Triangulo Escaleno!"

    }
}

console.log(tipoTriangulo(2,4,5))