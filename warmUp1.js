var mean = function(a, b) {
	return (a + b) / 2
}
var variance = function(a, b) {
	return (Math.pow((a-mean(a,b)), 2) + Math.pow((b-mean(a,b)), 2))/2
}
var stdev = function (a, b) {
	return Math.sqrt(variance(a, b))
}
var a = Math.floor(Math.random()*100000)
var b = Math.floor(Math.random()*100000)
console.log(mean(a, b))
console.log(variance(a, b))
console.log(stdev(a, b))