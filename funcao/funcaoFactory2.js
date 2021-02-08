function criarProduto(nome, preco){
    return {
          nome,
          preco,
          desconto: 0.1
    }
}

console.log(criarProduto('bola',5))
console.log(criarProduto('bicicleta',5))