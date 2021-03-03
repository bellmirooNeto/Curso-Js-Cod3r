// Object.preventExtensions
// essa dunção impede que você adicione novos atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))
console.log(produto)

produto.nome = 'borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// Ele sela o objeto não permitindo nem adicionar nem excluir atributos só pode altera-los

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = congela completamente o objeto, não é possivel modificado
