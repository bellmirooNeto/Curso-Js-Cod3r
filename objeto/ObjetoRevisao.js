// Os objetos são coleções dinâmicas de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 300

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

// Em um objeto podemos ter dentro dele :

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario : { // Outro objeto
        nome: 'Neto',
        idade: 19,
        endereco: { // Outro dentro dele
            logradouro : 'Loteamento Pará' ,
            numero : 12
        }
    },
    condutores : [{ // Um array que dentro contem outros objetos
        nome: 'Helder',
        idade: 18
    }, {
        nome : 'Maria',
        idade : 52
    }],
    calcularSeguroCarro: function (){ // Uma função
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro']['numero'] = 15
console.log(carro)

// delete carro.condutores
delete carro.calcularSeguroCarro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)