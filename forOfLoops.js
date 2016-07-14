var busStopTimes = ["8:30", "9:15", "9:30", "11:00", "11:05", "11:15", "11:30", "14:00", "15:15"]

// Write a for of loop that console.log's each time

for (times of busStopTimes) {
	console.log(times);
}

// Bonus: Write a for of loop that creates a new Array of times ending with ":15"
var times15 = [];
for (times of busStopTimes) {
	if (times[times.length-1] === "5" && times[times.length-2] === "1") {
		times15.push(times)

	}

}

	console.log(times15)


// Bonus: Write a for of loop that creates a new Array of times after noon


// Bonus: Write a for of loop that creates a new Array with each hour a bus comes.
// No duplicate hours allowed.
// => [8, 9, 11, 14, 15]

va timers = []
for (var busStopTime of busStopTimes) {
	var hour = busStopTime.split(":")[0]
	var hourInt = parseInt(hour)
	
}