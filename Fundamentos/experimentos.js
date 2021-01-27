let a = 3

global.b = 123

this.c = 456.57
this. d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca ou seja criar sem var ou let
// Acontece que assim você esta criando uma variavel global
abc = 5 // Não faça isso !!
console.log(global.abc)

// module.exports = { e: 546, f: false, g: 'teste' }