// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calc (x , y){
    let soma = x + y
    let sub = x - y
    let mult = x * y
    let div = x / y
    resu = ` A soma foi ${soma} a subtração foi ${sub} a multiplicação foi ${mult} e a divisão foi ${div}`
    return resu
}   

console.log(calc(5,2))
console.log(calc(10,2))