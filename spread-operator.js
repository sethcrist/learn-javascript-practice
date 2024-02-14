const combineArrays = (arrOne, arrTwo) => {
    // return arrOne.concat(arrTwo) OLD SCHOOL
    // 1. Refactor this function to use the spread operator to combine the arrays.
        return [...arrOne, ...arrTwo]
}
console.log(combineArrays([2, 4, 2], [4, 6, 11])) //[ 2, 4, 2, 4, 6, 11 ]

const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
    // return arrOne
    //     .concat(arrTwo)
    //     .concat(arrThree)
    //     .filter((num) => num % 2 !== 0) OLD SCHOOL
    return [...arrOne, ...arrTwo, ...arrThree].filter((num) => num % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))
//expected [ 3, 5, 5, 7, 5 ]
// new output: [ 3, 5, 5, 7, 5 ]




