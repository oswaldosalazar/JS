var books = ["harry potter", "the golden compass", "js: the good parts", "you don't know js"]

// Write a for in loop that console.log's each book's name

for (var i in books) {
	console.log(books[i])
}

// Bonus: Write a for in loop that capitalizes each word in the book titles. ie "The Golden Compass"

for (var i in books) {
	for (var j in books[i]){
		books[0].toUpperCase() + books.substring(1);
	}
	console.log(books[i])
}


// Bonus: Write a for in loop that only returns books with "js" in the title.