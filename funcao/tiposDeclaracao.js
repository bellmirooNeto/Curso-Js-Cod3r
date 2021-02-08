// function declaration é a declaração padrão
console.log(soma(5,4)) // Assim no compilador ele chama primeiro a função
function soma (x, y){
    return x + y
}

// function expression é a declaração onde você armazena uma função anônima em uma variavel
const subtracao = function (x, y){
    return x - y
} 

// named function expression é quando você armazena uma função em uma variavel e da um nome a ela

const multiplicacao = function multiplicacao (x, y){
    return x * y
}
// Observação importante
// No Js o compilador chama primeiro as funções do tipo function declaration antes do codigo em si, sabendo
// disso você pode chama-la antes da linha que ela foi criada.