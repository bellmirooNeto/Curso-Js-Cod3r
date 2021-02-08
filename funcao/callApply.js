function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1-this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 50
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const Carro = { preco: 50000, desc: 0.50}

console.log(getPreco.call(Carro))
console.log(getPreco.apply(Carro))
console.log(getPreco.call(Carro, 0.50, '$')) 
console.log(getPreco.apply(Carro, [0.50 , '$']))

// A diferença entre os dois é que no apply os parametros precisam está em um array no call n