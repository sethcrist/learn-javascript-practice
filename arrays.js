let groceryList = ["chips", "dip", "cookies"]

// 1. Write the code that will add "soda" to the end of the original array.
    // console.log(groceryList.push("soda"), groceryList);

// 2. Write the code that will add "granola" to the end of the array without altering the original array.
    // groceryList[3] = "granola";
    // console.log(groceryList);

// 3. Write the code that will return a subset of the array containing only "chips" and "dip".
    // console.log(groceryList.slice(0, 2));

// 4. Write the code that will add "beans" to the "chips" and "dip" array.
    // beansArray = "beans"
    // console.log(groceryList.slice(0, 2) + ", " + beansArray);

let numberss = [2, 4, 6, 8, 10]
// 5. Write the code that will add the number 0 to the beginning of the array.
    // console.log(numberss.unshift(0), (numberss));

// 6. Write the code that will add the number 12 to the end of the array.
    // console.log(numberss.push(12), (numberss));

// 7. Write the code that will remove the first number from the array.
    // console.log(numberss.shift(), (numberss));

// 8. Write the code that will add the number 0 to the beginning of the array without altering the original array.
// HINT: it's not .unshift You'll have to get creative! ;)
    // let num0 = 0
    // console.log(num0 + "," + numberss);
    // console.log(numberss);

let numSet = [2, 13, 6, 8, 4, 2]
// 9. Write the code that finds the index of the first appearance of the number 2.
    // console.log(numSet.indexOf(2));

// 10. Write the code that finds the index of the last appearance of the number 2.
    // console.log(numSet.lastIndexOf(2));

// 11. Write the code that returns the number at the third index.
    // console.log(numSet[3]);

let characters = ["y", "a", "r", "r", "a"]
// 12. Write the code that brings all the letters in the characters array together into a string.
    // console.log(characters.join(""));

// 13. Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
    // let charsReversed = characters.reverse();
    // console.log(charsReversed);

// 14. Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
    // console.log(charsReversed.join("*"));

// 15. Write the code that brings all the letters in the charsReversed array together into a string without separators.
    // console.log(charsReversed.join(""));

// Create two arrays consisting of three first names of your cohort members in each array.
let arr1 = ["seth", "mark", "ryan"]
let arr2 = ["morgan", "amir", "shawn"]

// 16. Write the code that sorts the names in alphabetical order.
    // console.log(arr1.sort(), arr2.sort())

// 17. Write the code that sorts the names in reverse alphabetical order.
    // console.log(arr1.concat(arr2).sort().reverse())

// 18. Write the code that sorts all the names in alphabetical order in a single array.
    // console.log(arr1.concat(arr2).sort())

let numbers = [42, 221, 71, 7, 18, 87]
let oddIndexes = []

// 19. Write the code that logs the values from the numbers array that are at odd indexes.
    // console.log(numbers[1], numbers[3], numbers[5])

// 20. Write the code that adds the values from odd indexes into the oddIndexes array.
    // oddIndexes.push(numbers[1])
    // oddIndexes.push(numbers[3])
    // oddIndexes.push(numbers[5])
    // console.log(oddIndexes)

/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */
let names = ["seth", "zack", "morgan", "mark"]

/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */
// console.log(names.length)

/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */
// console.log(names[0], names[1], names[2], names[3])

/**
 * TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.
 */
//     for (let i = 0; i < names.length; i++) {
//         console.log(names[i])
// }

/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */
// for (let elements of names) {
//     console.log(names)
// }

/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first element in the array
 * - second: returns the second element in the array
 * - last: returns the last element in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */
// let array1 = [1, 2, 3, 4, 5, 7]
// const first = (arr1) => {
// return array1[0]
// }
// console.log(first(array1))
//-----------
// const second = (arr1) => {
//     return array1[1]
// }
// console.log(second(array1))
//-----------
// const third = (arr1) => {
//     return array1[array1.length - 1]
// }
// console.log(third(array1))
//=================================================

const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];

/**
 * TODO:
 * Read each console log below, and write some javascript code to perform
 * the step that it describes
 */
planets.unshift("Sun")
console.log('Adding "The Sun" to the beginning of the planets array.');
console.log(planets);

planets.push("Pluto")
console.log('Adding "Pluto" to the end of the planets array.');
console.log(planets);

planets.shift()
console.log('Removing "The Sun" from the beginning of the planets array.');
console.log(planets);

planets.pop()
console.log('Removing "Pluto" from the end of the planets array.');
console.log(planets);

let index = planets.indexOf('Earth');
console.log('Finding and logging the index of "Earth" in the planets array: ' + index);

planets.reverse()
console.log("Reversing the order of the planets array.");
console.log(planets);

planets.sort()
console.log("Sorting the planets array.");
console.log(planets);
