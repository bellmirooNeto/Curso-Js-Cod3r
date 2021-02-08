const soma = function ( x, y) {
    return x + y
}
const imprimiResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}
imprimiResultado(5,4)
imprimiResultado(7,8, soma)
imprimiResultado(6, 4, function (x,y){ // Nesse caso o terceiro parametro eu passei essa função que vai
    return x - y                       // substituir o parametro de operacao
})
imprimiResultado(6, 6, (x,y) => x * y) // Agora do mesmo jeito que o ex anterior so que foi uma arrow func

const pessoa = {
    comentar: function(){ // Pode ser feito dessas duas formas
        console.log('iae')
    },
    falar(){
        console.log('dale') // com ou sem a palavra function
    }
}
pessoa.comentar()
pessoa.falar()