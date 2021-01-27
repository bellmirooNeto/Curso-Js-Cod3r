// Função sem retorno
function imprimiCalculo(a, b, c){
    console.log(a+b+c)
}
imprimiCalculo(10,10,10)

// Outro exemplo só que com o segundo valor sendo tratado
function imprimiSubtracao(d, e =0){
    console.log(d-e)
}
imprimiSubtracao(6,4)
imprimiSubtracao(5)

// Função com retorno

function soma(f, g = 0){
    return f + g
}
soma(5,9)
console.log(soma(5,9))