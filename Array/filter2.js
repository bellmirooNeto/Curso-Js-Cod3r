Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
            return newArray
}

const produtos = [
    { nome: 'Bola', preco: 25.5, fragil: false },
    { nome: 'Televisao', preco: 2500, fragil: true },
    { nome: 'celular', preco: 1300, fragil: true},
    { nome: 'martelo', preco: 54.75, fragil: false}
]

const eFragil = produtos => produtos.fragil 
const eCaro = produtos => produtos.preco >= 500

console.log(produtos.filter2(eFragil).filter2(eCaro))