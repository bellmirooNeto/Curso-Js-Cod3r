/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

vetorInteiro = [1,3,9,15]
vetorString = ['oi','dale','brabo','isso']
vetorDecimais = [5.4, 6.3, 8.4, 9.6]

vetorResultado = vetorInteiro.concat(vetorString).concat(vetorDecimais)

console.log(vetorResultado)

/* *** A outra forma ***

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}
*/