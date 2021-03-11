const alunos = [
    { nome: 'João', nota: 8.5},
    { nome: 'Maria', nota: 5.5}
]
// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// Principais diferenças
// No modo declarativo existe reaproveitamento de código, e nele temos como objetivo saber como vai funcionar
// no modo imperativo queremos apenas o resultado e nele não temos reaproveitamento e código muito engessado