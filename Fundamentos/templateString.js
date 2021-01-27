const nome = 'neto'
const concatenacao = 'dale ' + nome

const template = `
    Dale
    ${nome}`

console.log(concatenacao , template)

// Podemos fazer expressões com templates também

console.log(`1 + 1 = ${1 +1} `)

// usando uma function

const up = texto => texto.toUpperCase()

console.log(`Opa meu consagrado ${up('cuidado na vida')}`)