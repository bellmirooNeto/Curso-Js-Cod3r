function geraAleatorio( max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}
let numero = 1

do {
    numero = geraAleatorio(0,10)
    console.log(`O numero escolhido foi ${numero}`)
}while(numero != 1)
console.log('É nois')