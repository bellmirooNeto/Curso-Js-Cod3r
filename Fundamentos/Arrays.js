const valores = [5.6, 3.4, 3.9]
console.log(valores[2], valores[0])
console.log(valores[5])

valores[3] = 25
console.log(valores)
console.log(valores.length)

valores.push({id: 8}, false, null, 'dale')
console.log(valores)

console.log(valores.pop())
delete valores [0]
console.log(valores)

console.log(typeof valores)