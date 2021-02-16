/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

const calculadora = function (numero1, sinal, numero2 ){
    switch(sinal){
        case '+':
            soma = numero1 + numero2
            console.log(`A soma foi : ${soma}`)
            break
        case '-':
            subtracao = numero1 - numero2
            console.log(`A subtração foi : ${subtracao}`)
            break
        case '*':
            multiplicacao = numero1 * numero2
            console.log(`A multiplicação foi : ${multiplicacao}`)
            break
        case '/':
            divisao = numero1 / numero2
            console.log(`A divisão foi : ${divisao}`)
            break
        default :
            console.log('Operação inválida')
    }
}
calculadora(10,'+', 5 )
calculadora(20, '-', 5)
calculadora(8, '*' ,8 )
calculadora(30, '/' , 5 ) 