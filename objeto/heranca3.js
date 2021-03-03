const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // Quer dizer que estou criando já relacionando com o __proto__
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(pai.nome)
console.log(filha1.nome)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carol'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? // essa função serve pra ver se o atributo pertence ou nao ao objeto
    console.log(key) : console.log(`Por herança: ${key}`)
}