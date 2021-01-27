const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'
// A linha acima quer dizer que atribuir uma  arrow function a uma constante como
// só tem um parâmetro, não precisei colocar os parenteses logo depois fiz uma condição
// se uma nota for maior ou igual a 7 mostre Aprovado se não mostre Reprovado 

console.log(resultado(8.0))
console.log(resultado(5.5))
