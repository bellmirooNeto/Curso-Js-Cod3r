console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')

}
console.log('Isso é muito massa'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([9,1,2,3,4,5,7].first())
console.log(['c','a','b','d'].first())

String.prototype.toString = function (){
    return 'lascou tudo'
}

console.log('E agora??'.reverse())