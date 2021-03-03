// pessoa -> 123 -> {...}
const pessoa = {nome: 'Neto'}
pessoa.nome = 'Junior'
console.log(pessoa)

// pessoa -> 456 -> {}
// pessoa = {nome: 'Apolo' } da erro por que não se pode alterar onde se aponta uma constante

Object.freeze(pessoa) // Isso deixa o objeto intocavél

pessoa.nome = 'Maria'
pessoa.end = 'Rua pará'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome : 'Silva' })
pessoaConstante.nome = 'Poseidon'
console.log(pessoaConstante)