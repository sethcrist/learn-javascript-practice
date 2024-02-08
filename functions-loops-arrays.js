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
const onlyOdd = (array) => {
    let newArray1 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            continue
        } else {
            newArray1.push(array[i])
        }
    }
    return newArray1
}
console.log(onlyOdd(testArr2))


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
const addedSum = (num) => {
    let sum = 0
    for (let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum
}
console.log(addedSum(addThese1), addedSum(addThese2))

// 5. Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
const returnsIndex = (array) => {
    let start = 0;
    for (let i = 0; i < array.length; i++) {
        if(start < array[i]) {
            start = array[i]
        }
    }
    return array.indexOf(start)
}
console.log(returnsIndex(indexHighestNumber))

// 6. Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]
const twoIntoOne = (arr1, arr2) => {
     let arr = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr.includes(arr1[i])) {
            continue
        } else {
            arr.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr.includes(arr2[i])) {
            continue
        } else {
            arr.push(arr2[i])
        }
    }
    return arr
 }
 console.log(twoIntoOne(arr1, arr2));