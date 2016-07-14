
var sum = (a, b) =>  a + b

sum (2, 3)

var isEqual = function (a, b) {
	return a === b
}

isEqual

var discountPercentage = function (OrigAmount, DiscPerc) {
	if (DiscPerc < 0 || DiscPerc > 100) {
		console.log("Enter a discount percent between 0 and 100")

	} else {
	return OrigAmount * (1-DiscPerc /100)
	}
}

discountPercentage(200,10)

var stringCapitalize = function (str) {
	str = str.split(" ")
	for (i=0; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].slice(1)
	}
	str = str.join(" ")
	return str
}

stringCapitalize("hello world")

var evenNumbers = function () {
	var a = Math.floor(Math.random()*100)
	console.log(a)
	for (i = 0; i <= a; i += 2) {
		console.log(i)
	}
}

evenNumbers()


var isDivisible = (a ,b) => a % b === 0

isDivisible(4, 2)

var oddNumbers = function() {

	var a = Math.floor(Math.random()*100)

	if (a>40) {
		for (i = 40; i < a; i += 2) {
			console.log(i+1)
		}
	} else if (a<40) {
		for (i = 0; i < 40; i += 2) {
		console.log(i+1)
		}
	}
}
oddNumbers()

var greet2 = b => console.log("Hello World2")

greet2()
