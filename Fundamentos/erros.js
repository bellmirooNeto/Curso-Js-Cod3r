// Para tratar erro é usado os blocos try catch
// e tbm para mandar uma mensagem para usuario usa se o bloco throw

function tratarErrorElancar(erro){
    //pode ser mandado
    // throw new Error('...')
    //throw 10
    //throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg : erro.message,
        date: new Date
    }
}

function imprimirNomeGritando (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErrorElancar(e)
    } finally { // e tbm tem o finally que ele é apresentado mostrando ou não o erro
        console.log('final')
    }
}

const obj = {nome: 'Belmiro' }
imprimirNomeGritando(obj)