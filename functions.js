// 1. Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco());

// 2. Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `welcome, ${name}!`
}
console.log(greeting("seth"));

// 3. Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
    if (num % 2 === 0) {
        return `the number ${num} is even`
    } else {
        return `the number ${num} is odd`
    }
}
console.log(oddOrEven(6));

// 4. Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// 5. Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// 6. Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// 7. Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// 8. Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// 9. Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// 10. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.