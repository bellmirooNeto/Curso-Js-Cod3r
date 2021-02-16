// 12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1) // função fatorial faz o fatorial do numero kkkk
    }
}

console.log(fatorial(4))