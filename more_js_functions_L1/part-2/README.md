# JavaScript Functions - part 2

1. Write your solutions in `part-2.js`
1. Solve each of the given problems, creating a function that _returns_ the value. Then, use node to output the result of the function to the console. (Be sure and _return_ values in your functions, and then console.log the _invoking_ of the function - see below for example)
1.

### Example

```javascript
function test(str) {
  return "test" + str
}

console.log(test("ing"))
```

## Problems

1. Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
2. Define a function called `longestWord` that takes a string and returns the longest word in the string.
3. Refactor the `longestWord` function so that it ignores punctuation.
4. Define a function called `factorial` that takes a random number as an argument and then returns the factorial of that given number.
5. **Bonus**: Write a function called `palindrome` that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.
