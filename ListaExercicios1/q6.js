// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
// A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capInicial, taxaJuros, tempoAp){
    jurosS = capInicial + (capInicial * taxaJuros * tempoAp )
    return jurosS
}

function jurosComposto (capInicial, taxaJuros, tempoAp){
    jurosC = capInicial * (1 + taxaJuros)  ** tempoAp
    return jurosC
}
console.log(jurosSimples(100, 10/100, 2))
console.log(jurosComposto(5, 10/100, 5))
