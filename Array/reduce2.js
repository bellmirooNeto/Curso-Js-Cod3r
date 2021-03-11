const alunos = [
    { nome: 'Pedro', nota: 8.4, bolsista: false},
    { nome: 'Junior', nota: 7.7, bolsista: true},
    { nome: 'Alana', nota: 8, bolsista: true},
    { nome: 'Fernanda', nota: 8.2, bolsista: false},
]
// Questionamento 1: todos os alunos são bolsistas?

const todosOsbolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map( a => a.bolsista).reduce(todosOsbolsistas)) 

// Questionamento 2: Algum aluno é bolsista?
 
const algumBosista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce(algumBosista) )