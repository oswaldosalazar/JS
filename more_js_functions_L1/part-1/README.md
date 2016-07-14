# JavaScript Functions - part 1

1. Write your solutions in `part-1.js`
1. Solve each of the given problems, creating a function that _returns_ the value. Then, use `node` to output the result of the function to the console. (Be sure and _return_ values in your functions, and then console.log the _invoking_ of the function - see below for example)

### Example

```javascript
function test(str) {
  return "test" + str
}

console.log(test("ing"))
```

## Problems

1. Define a function called `sum` that takes two numbers as arguments and returns their sum.
2. Define a function called `isEqual` that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
3. Define a function called `discountPercentage` that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
4. Define a function called `stringCapitalize` that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.
5. Define a function called `evenNumbers` that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.
6. Define a function called `isDivisible` that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.
7. **Bonus**: Write a function called `oddNumbers` that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
