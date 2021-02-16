// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.
negativos = [-5, -4, 15, 32, -25, 22 ]

function menorQzero(numeros){
    let negativos = 0
    let positivos = 0
    for (i = 0; i< numeros.length; i++){
        if(numeros[i]< 0){
            negativos++
        } else {
            positivos++
        }
    }
    console.log(`Existem ${negativos} numeros negativos e ${positivos} positivos`)
}

menorQzero(negativos)