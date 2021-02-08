// Funções callback são funcões que são disparadas quando um determinado evento acontece

const fabricantes = ['Playstation', 'Microsoft', 'Nitendo']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))