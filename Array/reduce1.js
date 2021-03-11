const alunos = [
    { nome: 'Pedro', nota: 8.4, bolsista: false},
    { nome: 'Junior', nota: 7.7, bolsista: true},
    { nome: 'Alana', nota: 8, bolsista: true},
    { nome: 'Fernanda', nota: 8.2, bolsista: false},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)