function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

while(opcao != 1) {
    opcao = getInteiroAleatorio(0, 10)
    console.log(`A opção que foi escolhida foi ${opcao}`)
}
console.log('Flw !')