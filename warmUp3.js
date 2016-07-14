var a1 = Math.random()*100
var a = Math.floor(a1)

console.log(a1)
if (a>40) {
	for (i = 40; i < a; i += 2) {
		console.log(i+1)
	}
}

if (a<40) {
	for (i = 0; i < 40; i += 2) {
		console.log(i+1)
	}
}