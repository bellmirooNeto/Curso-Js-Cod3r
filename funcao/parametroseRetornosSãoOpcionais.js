function area(largura, altura) {
    const area = largura * altura 
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(3,3))
console.log(area(3))
console.log(area())
console.log(area(5, 3, 15, 25, 45))
console.log(area(6,6)) // O retorno foi undefined