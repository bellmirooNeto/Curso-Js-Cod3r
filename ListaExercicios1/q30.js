// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
qualMaioreMenor = [25, 30, 2, 54, 98, 37, -1]

function MaiorMenor(valoresNumericos){
    let maior = 0
    let menor = 0
    for (i = 0; i < valoresNumericos.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else if(valoresNumericos[i] > maior){
            maior = valoresNumericos[i]
        } else if( valoresNumericos[i]< menor ){
            menor = valoresNumericos[i]
        }
    }
    console.log(`O maior numero foi ${maior} e o menor foi ${menor}`)
}

MaiorMenor(qualMaioreMenor)