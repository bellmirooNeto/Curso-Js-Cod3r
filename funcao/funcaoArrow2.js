function Pessoa(){
    this.idade = 0

    setInterval(() =>{  // Nesse caso funcionou por que na arrow function o this NÃO MUDA
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa