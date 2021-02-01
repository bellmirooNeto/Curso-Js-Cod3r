function noticiaBoa(nota){
    if (nota >=7){
        console.log('Aprovado com ' + nota)
    }
}

noticiaBoa(4.5)
noticiaBoa(8.5)

function seVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade ' + valor)
    }
}
seVerdadeEuFalo()
seVerdadeEuFalo(null)
seVerdadeEuFalo(undefined)
seVerdadeEuFalo(NaN)
seVerdadeEuFalo('')
seVerdadeEuFalo(0)
seVerdadeEuFalo(-1)
seVerdadeEuFalo(' ')
seVerdadeEuFalo('?')
