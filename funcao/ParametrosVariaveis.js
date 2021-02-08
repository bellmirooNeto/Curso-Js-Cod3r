function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] // arguments é algo que vem automaticamente em todas as funções
                             // Onde você pode utilizalo sempre
    }
    return soma
}

console.log(soma())
console.log(soma(5,4))
console.log(soma(5,36,85,97))
console.log(soma(5.4,3.6))
console.log(soma(55,'Opa'))
console.log(soma(' iae ','dale ', 'meu ', 'consagrado'))