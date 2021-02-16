// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o 
// resultado e o resto da divisão destes dois valores.
 
function divisao (dividendo, divisor){
    resul = Math.floor(dividendo/divisor) // A função Math.floor(x) retorna o menor número inteiro assim não
    resto = dividendo % divisor           // trás as casas decimais
    mostrar = ` O resultado da divisão foi ${resul} e o resto foi ${resto}`

    return mostrar
}

console.log(divisao(11,4))
console.log(divisao(5,2)) 