const imprimiResultado = function(nota){
    if(nota >=6){
        console.log('Aprovado !')
    } else {
        console.log('Reprovado !')
    }
}
imprimiResultado(10)
imprimiResultado(5)
imprimiResultado('Eita') //Cuidado !!! que no js como é uma linguagem fracamente tipada ele compara 
                        // mesmo sendo uma string.