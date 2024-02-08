// 1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]
const multThree = (num) => {
    let newArray = [];
    for (let i = 0; i < num.length; i++) {
        newArray.push(num[i] * 3);
    }
    return newArray
}
console.log(multThree(testArr1))
console.log("======================")

// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
    const comboArr = [
    7,
    "n",
    true,
    "i",
    "c",
    10,
    "e",
    -388,
    "w",
    3,
    "o",
    0,
    "r",
    false,
    "k"
]
// output: "nicework"
// using .filter() method
    // const stringCreator = (array) => {
    // let string = array.filter((value) => {
    // return typeof value === "string"
    // })
    // return string.join("")
    // }
    // console.log(stringCreator(comboArr))


// 4. Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10

const addThese2 = []
// output: 0

// 5. Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

