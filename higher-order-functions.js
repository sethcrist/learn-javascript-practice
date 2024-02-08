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
// const stringConverter = (numString) => {
//  return numString.split('').map(Number)
// }
// console.log(stringConverter(stringOfNumbers))

// 10. Create a function that takes in two arrays and returns one array with no duplicate values.
const arr4 = [3, 7, 10, 5, 4, 3, 3]
const arr5 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]
// const twoIntoOne = (arr1, arr2) => {
//  let arr = []
//  for (let i = 0; i < arr1.length; i++) {
//   if (arr.includes(arr1[i])) {
//    continue
//   } else {
//    arr.push(arr1[i])
//   }
//  }
//  for (let i = 0; i < arr2.length; i++) {
//   if (arr.includes(arr2[i])) {
//    continue
//   } else {
//    arr.push(arr2[i])
//   }
//  }
//  return arr
// }
// console.log(twoIntoOne(arr1, arr2));
//------------------or----------
// const oneArray = (arr1, arr2) => {
//  let combinedArray = arr1.concat(arr2)
//  let uniqueArray = combinedArray.filter((value, index) => combinedArray.indexOf(value) === index)
//  return uniqueArray
// }
// console.log(oneArray(arr4, arr5))

// 11. Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"
// const mixedData = (array) => {
//  return array.filter(string => typeof string === "string")
// }
// console.log(mixedData(allTheData))
