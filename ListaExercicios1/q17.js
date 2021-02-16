/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const aumento = function (salario, plano){
    switch(plano){
        case 'A':
            salarioAumentado = salario + (salario * 0.1) 
            console.log(`Seu novo salário é ${salarioAumentado}`)
            break
        case 'B':
            salarioAumentado = salario + (salario * 0.15)
            console.log(`Seu novo salário é ${salarioAumentado} `)
            break
        case 'C':
            salarioAumentado = salario + (salario * 0.2)
            console.log(`Seu novo salário é ${salarioAumentado}`)
            break
        default:
            console.log('Plano inválido')
    }
}
aumento(50,'C')
aumento(50,'B')
aumento(50,'A')
aumento(45,'d')