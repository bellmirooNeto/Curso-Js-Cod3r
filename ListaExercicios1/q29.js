/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações */

estaEntre = [25, 20, 32, 45, 12, 6, 8, 9, 15, 17]

 function verificandoIntervalo(numeros){
     let esta = 0
     let Naoesta = 0
for(let i = 0; i < numeros.length ; i++){
    if(numeros[i] >= 10 && numeros[i] <= 20){
         esta++
    }else{  
         Naoesta++
    }
    
}
console.log(` Existem ${esta} entre 10 e 20 e existe ${Naoesta} fora desse intervalo`)
 }

 verificandoIntervalo(estaEntre)