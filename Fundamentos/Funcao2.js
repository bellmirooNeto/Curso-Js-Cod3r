// Armazenando uma função em uma variavel

const imprimirSoma = function (a, b){    // Nesse caso a função é uma função anonima, 
    console.log(a+b)                    // ou seja uma função que não tem nome.
}

imprimirSoma(5,5) 

// Armazenando uma função arrow em uma variavel

const soma = (a, b) => {    // Uma coisa diferente das funções arrow é que
    return a + b            // o igual e o maior que substutui a palavra function
}

console.log(soma(5,5))

//retorno implicito 

const subtracao = (a, b) => a-b      // Nesse caso quando a função retorna 
                                    // Só uma linha de código pode ser tirado
console.log(subtracao(5,5))        // A palavra return