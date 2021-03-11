const nums = [1, 2, 3, 4, 5]

// O map() é um for com proposito ele transforma um array em outro só que sempre com o mesmo tamanho
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10 // mesma coisa do ex anterior só que agora somando 10
const triplo = e => e * 3 // e utilizando uma arrow function com o retorno implicito
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado2)