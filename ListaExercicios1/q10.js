/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */ 

function eounao (numero){
    if(numero % 3 === 0){
        resposta = true
    } else {
        resposta = false
    }
    return resposta
}
console.log(eounao(3))
console.log(eounao(5))
console.log(eounao(6))
console.log(eounao(-1)) 