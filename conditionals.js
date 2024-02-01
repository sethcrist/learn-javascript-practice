//-------------Write the code that will log true or false for the following:-----------

// 1. Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 /2) //false

// 2. Does 5 evaluate to the same as "5"?
console.log(5 == "5") //true

// 3. Does 5 strictly equal "5"?
console.log(5 === "5") //false

// 4. Does !3 strictly equal 3?
console.log(!3 === 3) //false

// 5. Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7) //true

// 6. Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 7) //true

// 7. Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN")) //true

// 8. Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn")) //false

// 9. Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l") //false

// 10. Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L") //true

// --------------------Write a conditional statement for the following prompts. Make sure you try different options and
// change the variables to ensure properly working code.

// 11. Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let priceOfItem = 99
if (priceOfItem <= 100) {
    console.log("you are in budget")
} else {
    console.log("not in budget")
}

// 12. Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = true
if (hungry) {
    console.log("eat food")
} else {
    console.log("keep coding")
}

// 13. Write a statement that takes a variable of trafficLight and logs "go" if the light is green,
// "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "green"
if (trafficLight === "green") {
    console.log("Go")
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red") {
    console.log("stop")
} else {
    console.log("not a traffic color")
}

// 14. Write a statement that takes two variables that are numbers and outputs the larger number.
// If the numbers are equal, output "the numbers are the same".
let num1 = 5
let num2 = 10
if (num1 > num2) {
    console.log(num1 + " is larger")
} else if (num1 < num2) {
    console.log(num2 + " is larger")
} else {
    console.log("the numbers are the same")
}

// 15. Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let num = 1
if (num === 0) {
    console.log("this # is 0")
} else if (num % 2 === 0) {
    console.log("this # is even")
} else {
    console.log("this # is odd")
}
// stretch goals
// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log
// "perfect score", if the grade is zero log "no grade available."
 let grade = 45
if (grade === 100) {
    console.log("perfect score")
} else if (grade === 0) {
    console.log("no grade available")
} else if (grade >= 90) {
    console.log("you got an A")
} else if (grade >= 80) {
    console.log("you got an B")
} else if (grade >= 70) {
    console.log("you got an C")
} else if (grade >= 60) {
    console.log("you got an D")
} else {
    console.log("you are failing")
}
