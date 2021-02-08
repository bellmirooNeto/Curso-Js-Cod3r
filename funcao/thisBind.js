const pessoa = {
    saudacao: 'Dale dale',
    falar(){  // também podemos criar uma função desse jeito quando for criada como atributo
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // Aconteceu um conflito entre dois paradigmas o funcional e o OO

const falaPessoa = pessoa.falar.bind(pessoa) // Nesse caso utilizando o bind o sistema sabe sempre o 
falaPessoa()                                 // que o this tá apontando.