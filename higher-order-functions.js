// 1. Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

// 2. Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
 const arr2 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]

// 3. Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr3 = [2, 7, 3, 5, 8, 10, 13, -9]
// output: [7, 3, 5, 13, -9]

// 4. Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]

// 5. Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

// 6. Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

// 7. Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
const wackyWords = (array) => {
 let newWords = array.map((value) => {
 let singleWordArray = value.split("")
  return singleWordArray.map((value, index) => {
   if (index % 2 !== 0) {
    return value.toUpperCase()
   } else {
    return value
   }
  })
 })
 return newWords.join("")
}
console.log(wackyWords(makesWackyWords))

//-------------------or--------------
// const everyOtherLetter = (arr) => {
//     let wordArray= arr.toString().split("")
//     let transformedArray = wordArray.map((value, index) => {
//         return index % 2 === 0 ? value.toLowerCase() : value.toUpperCase()
//     })

//         return transformedArray.join("")
//    }
// console.log(everyOtherLetter(makesWackyWords))

// 8. Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"

// 9. Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"
// output: [4, 5, 7, 4, 3, 2, 8]