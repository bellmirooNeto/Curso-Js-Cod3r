/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const pago = function(idade){
    if(idade <= 10 && idade >=1){
        console.log('Você vai pagar R$180,00')
    } else if(idade > 10 && idade <= 30){
        console.log('Você vai pagar R$150,00')
    } else if(idade > 30 && idade <= 60){
        console.log('Você vai pagar R$195,00')
    } else if(idade > 60){
        console.log('Você vai pagar R$230,00')
    } else {
        console.log('idade inválida')
    }
}
pago(15)
pago(35) 
pago(10)
pago(61)
pago(-5)