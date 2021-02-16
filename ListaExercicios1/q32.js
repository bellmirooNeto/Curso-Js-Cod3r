// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

media = [20, 30 ,40 , 50 , 60]

function mediaDosNumeros(numeros){
    let numero = 0
    let resultado = 0
    let contador = 0

    for (let i = 0; i < numeros.length; i++){
        numero = numero + numeros[i]
        contador++
    }
     resultado = numero / contador
     console.log(`A media foi de ${resultado}`)
}

mediaDosNumeros(media)