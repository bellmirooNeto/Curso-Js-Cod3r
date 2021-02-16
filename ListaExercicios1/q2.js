// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function qualTriangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3 ) {
        console.log('O triângulo é Equilatero')
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log('O triângulo é Isóceles')
    } else {
        console.log('O triângulo é escaleno')
    }
} 

qualTriangulo(5,5,5)
qualTriangulo(5,5,4)
qualTriangulo(4,5,4)
qualTriangulo(5,4,4)
qualTriangulo(4,3,2)