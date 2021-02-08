function Carro(VelocidadeMaxima = 200, aumento = 5) {
    // No Js se quisermos criar um metodo ou variaveis publicas usamos o this e privado o let ou const
    // Atributo privado

    let velocidadeAtual = 0
     
    // metodo publico
    this.acelerar = function (){
        if (velocidadeAtual + aumento <= VelocidadeMaxima){
            velocidadeAtual += aumento
        } else {
            velocidadeAtual = VelocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const celta = new Carro
celta.acelerar()
celta.acelerar()
console.log(celta.getVelocidadeAtual())

const fuska = new Carro(400, 100) // Aqui esou alterando os parametros a partir da função construtora

fuska.acelerar()
fuska.acelerar()
console.log(fuska.getVelocidadeAtual())