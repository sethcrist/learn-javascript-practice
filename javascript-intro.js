// 1. Write the code that will log the output of 34 added to 71.
console.log(34 + 71)

// 2. Write the code that will log the output of 67 subtracted from 123.
console.log(67 - 123)

// 3. Write the code that will log the output of 56 multiplied by 23.
console.log(56 * 23)

// 4. Write the code that will log the output of 45 divided by 5.
console.log(45 / 5)

// 5. Write the code that will log the output of 5 to the power of 7.
console.log(5 ** 7)

// 6. Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33 % 6)

// 7. Write the code that will log the length of a string containing your name
let name = "seth"
console.log(name.length)

// 8. Write the code that will log whether your string includes the letter "e"?
console.log(name.includes("e"))

// 9. Write the code that will log the character at the first index of the string.
console.log(name.charAt(0))

// 10. Write the code that will log the string in all uppercase letters.
console.log(name.toUpperCase())

const theQuestion = "life, the universe, and everything"
const theAnswer = 42

// 11. Write the code that will log theAnswer divided by 2.
console.log(theAnswer / 2)

// 12. Write the code that will log the whole number remainder of theAnswer when divided by 3.
console.log(theAnswer % 3)

// 13. Write the code that will log the length of theQuestion.
console.log(theQuestion.length)

// 14. Write the code that will log the length of theQuestion divided by 2.
console.log(theQuestion.length / 2)

// 15. Write the code that will log the length of theQuestion added to theAnswer.
console.log(theQuestion.length + theAnswer)

// 16. Write the code that will log the index of the character "f" in the theQuestion.
console.log(theQuestion.indexOf("f"))

// 17. Write the code that will log the index of the second comma in the theQuestion.
commaOne = theQuestion.indexOf(",")
commaTwo = theQuestion.indexOf(",", commaOne + 1)
console.log(commaTwo)

// 18. Write the code that will log the concatenation of the two variables.
console.log(theQuestion + " " + theAnswer)

// 19. Write the code that will log the character "l" from theQuestion.
console.log(theQuestion.charAt("l"))

// 20. Write the code that will extract "the universe" from theQuestion.
console.log(theQuestion.slice(6, 18))

// 21. Write the code that will extract "everything" from theQuestion.
console.log(theQuestion.slice(24, 34))

// 22. Write the code that will log the last character of theQuestion without manually counting the number of characters.
console.log(theQuestion.charAt(theQuestion.length - 1))
