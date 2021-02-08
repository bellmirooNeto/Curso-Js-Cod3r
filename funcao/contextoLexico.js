const valor = 'global'

function minhaFunc(){
    console.log(valor)
}
function executa(){
    const valor = 'local'
    minhaFunc()
}
executa()