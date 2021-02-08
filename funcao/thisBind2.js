function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){  // SetInterval é uma função que será disparada a cada determinado tempo 
        self.idade++         // que você pediu.
        console.log(self.idade)
    }/*.bind(this)*/, 1000)  //Podemos usar o bind ou criar uma constante tentando 'burlar' o sistema
}
new Pessoa