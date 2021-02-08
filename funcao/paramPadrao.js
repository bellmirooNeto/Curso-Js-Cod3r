// Estrategias para colocar um valor padrão no parâmetro
// Estrategia 1
function soma1(a, b, c){
 a = a || 1
 b = b || 1
 c = c || 1 
    return a + b + c
}
console.log(soma1(), soma1(5), soma1(5,4,3), soma1(0,0,0))

// Estrategia 2, 3 e 4

function soma2(a, b, c){
    a = a !== undefined ? a: 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(6), soma2(7,4,3), soma2(0,0,0))

// Valor padrão com es2015
function soma3(a=1, b=1, c=1){
    return a + b + c
}

console.log(soma3(), soma3(5), soma3(5,4,3), soma3(0,0,0))