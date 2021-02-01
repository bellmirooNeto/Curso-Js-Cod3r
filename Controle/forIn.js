const notas = [5.8, 4.4, 9.9, 6.4, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Belmiro',
    sobrenome: 'Neto',
    idade: 19,
    peso : 75
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}