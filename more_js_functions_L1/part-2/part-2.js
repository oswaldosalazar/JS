// write your functions here
var oldestPerson = function(obj1) {
    var ages = []
    //console.log(obj1)
    for (key in obj1) {
      ages.push(obj1[key])
    }
    //console.log(ages);
    var i = ages.indexOf(Math.max.apply(null,ages))
    //console.log(i)
    names = Object.keys(obj1)
    //console.log(names)
    console.log(names[i])
    return names[i]

}
oldestPerson({'Chuck': 12, 'Brian': 46, 'Oz': 38, 'Bart': 25, 'Mary': 30})

var longestWord = function(str) {

  wordLengths = []

  for (i in str) {
    str[i] = str[i].replace( /[^a-zA-Z]/g, "");
  }

  for (i in str) {
    wordLengths.push(str[i].length)
  }

  // console.log(wordLengths)
  var j = wordLengths.indexOf(Math.max.apply(null, wordLengths))
  //console.log(j)
  console.log(str[j])
}

longestWord([ 'Chucky,', 'Brian', 'Oswaldo', 'Bart', 'Marcus......' ])

var factorial = function(n) {
	if (n === 1 || n === 0) {
		return 1
	} else {
		return n * factorial(n-1)
	}
}

factorial(5)
console.log(factorial(5))

var palindrome = function (word) {
  reverseWord = []
  for(var i = word.length-1; i >= 0; i--) {
    reverseWord.push(word[i])
  }
  reverseWord = reverseWord.join("")

  return word === reverseWord
}

palindrome("anina")
console.log(palindrome("anina"))
