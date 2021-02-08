let dobro = function (a){ // Função tradicional
    return 2 * a 
}

dobro = (a) => { // Função arrow **IMPORTANTE toda função arrow tem que está relacionada a uma variavel
    return  2 * a
}
dobro = a => 2 * a // Como só tem 1 parametro pode tirar os paranteses e o retorno como só é um fica implicito

console.log(dobro(Math.PI))
console.log(dobro(5))

let ola = function (){
    return 'iae'
}
ola = () => 'iae'
ola = _ => 'iae' // Nesse caso possui um parametro que na hora da execução pode ser ignorado
console.log(ola())