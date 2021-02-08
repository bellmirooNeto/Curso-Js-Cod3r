const notas = [8.5, 5.4, 6.8, 6.9, 9, 9.6]

// Fazendo sem o callBack
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback 

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

// Com callback e usando arrow function

const notasBaixas3 = notas.filter(nota => nota <7)

console.log(notasBaixas3)