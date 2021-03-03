// Algumas formas de criar objetos
//  1 - Notação literal

const obj1 ={}
console.log(obj1)

// 2 - Usando a função Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// 3 - Usando funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome // Tornei a variável publica
    this.getPrecoComDesc = () =>{
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 8.05, 0.15 )
const p2 = new Produto('Notebook', 2500.50, 0.25)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

// 4 - Usando a função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Angelo', 55000, 5)
const f2 = criarFuncionario('Serpa', 2500, 3)
console.log(f1.getSalario(), f2.getSalario())

// 5 - Utilizando o Object.create
const filha = Object.create(null)
filha.nome = 'Hilena'
console.log(filha)

// 6 - Usando uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Olá eu sou um JSON" }')
console.log(fromJSON.info)