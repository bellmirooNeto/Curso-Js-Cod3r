const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // transforma um objeto em JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))


// Observações todo JSON o atributo tem que está com aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // a função .parse() é pra transformar objetos em JSOn
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))