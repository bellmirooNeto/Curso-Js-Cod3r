const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // Retira o ultimo valor do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no ultimo valor do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro valor do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa') // o primeiro parametro significa onde vai começar a adicionar
console.log(pilotos)                    // o segundo diz quantos vamos remover e a partir do 3 vamos dizendo 
                                        // o que está sendo adicionado
// removendo
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // novo array a partir do primeiro e o parametro significa de onde
console.log(algunsPilotos1)              // ele começa a pegar os elementos

const algunsPilotos2 = pilotos.splice(1,4)
console.log(algunsPilotos2
    )