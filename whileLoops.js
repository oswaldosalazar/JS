var dogs = ["fido", "buddie", "lassie", "beethoven", "otis", "benji", "scooby"]

// Write a while loop that prints each dog's name

var i = 0;

while (i < dogs.length) {
	console.log(dogs[i]);
	i++;
}

// Bonus: Write a while loop that counts how many dogs have names longer than 5 characters.

var count = 0;
var i = 0;
 while (i < dogs.length) {
 	if(dogs[i].length > 5) {
 		count += 1;
 	}
 	i++;
 }
  	console.log(count);



// Bonus: Write a while loop that creates a new array with each name reversed

// var i = 0;
// while (i < dogs.length) {

// }

console.log(dogs.map(s=>s.split("").reverse().join('')));


// Bonus: Write a while loop that creates a new array with only the even indexed dogs
