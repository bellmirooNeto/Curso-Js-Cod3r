const pessoa = {
    nome : 'Julia',
    idade: 5,
    peso : 13
}

console.log(Object.keys(pessoa)) // pega todas as chaves do objeto
console.log(Object.values(pessoa)) // pega todas os dados do objeto
console.log(Object.entries(pessoa)) // ele separa cada par chave : valor em arrays

// Podemos usar um foreach para navegar pelos arrays criado

Object.entries(pessoa).forEach(([chave, valor]) => { // aqui usando o destructring
    console.log(`${chave} : ${valor}`)
})
     // Essa função (defineProperty) serve para criarmos uma propriedade Ai colocamos como parametros
     //  o objeto que vai ser atribuido o nome da propriedade e o qeu ela vai ter
Object.defineProperty(pessoa, 'dataNascimento', { 
    enumerable : true, // Ela vai poder ser listada?
    writable: false, // Ela vai poder ser alterada ?
    value : '01/01/2020' // valor do propriedade do objeto
})

pessoa.dataNascimento = '01/01/2021'
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const destino = {a : 1}
const o1 = {b : 3 }
const o2 = {c : 5, a : 4}
const obj = Object.assign(destino, o1, o2) // ela concatena e reescreve se caso ja foi inicada

Object.freeze(obj) // Ela congela o objeto
obj.c = 123455687
console.log(obj)
