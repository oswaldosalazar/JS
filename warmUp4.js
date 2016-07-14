var integers = []
for (var i = 0; i <=20; i++) {
	var elem = integers.push(Math.floor(Math.random()*100))
}
console.log(integers)
console.log(typeof integers[0])
console.log(Math.min.apply(null,integers))
console.log(Math.max.apply(null,integers))