// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares 
vetor = [32, 28, 24, 44, 56, 88, 93]

function parEImpaR(vetorNum){
let qtdPares = 0
let qtdImpares = 0
for(let i =0; i< vetorNum.length; i++){
    if(vetorNum[i] % 2 == 0){
         qtdPares++
    }else{
         qtdImpares++
    }   
} 
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares. `)
}

parEImpaR(vetor)

