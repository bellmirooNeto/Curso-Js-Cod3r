// Função em Js é First-Class Object (Citizens)
// Higher-order function

// Podemos criar da forma literal
function fun1() {}

// Podemos armazenar em uma variável ou constante

const fun2 = function () {} // Nesse caso estamos criando uma função ânonima, pois é uma função sem nome

// Podemos também armazenar em um arrray

const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](4,3))

// Podemos armazen um atributo de um objeto

const objeto = {} // Criamos o objeto
objeto.falar = function() { return 'iae'} // armazenando no atributo
console.log(objeto.falar())

// Podemos passar uma função como parâmetro de outra

function run (fun){
    fun()
}

run(function () {console.log('funcionando !!')})

// Uma função pode retornar ou conter uma função

function soma(a, b){
    return function (c) {
         console.log(a + b + c)
    }
}

soma(5,5)(4) //Podemos chamar dessa forma ou
const resulAb = soma(5,5) // podemos fazer por parte
resulAb(4)