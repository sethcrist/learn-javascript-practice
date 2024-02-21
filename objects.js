// const person = {
//     firstName: "Arthur",
//     lastName: "Dent"
// }
// 1. Write the code that accesses the first name of the person object.
    //console.log(person.firstName)

// 2. Write the code that accesses the last name of the person object.
    //console.log(person.lastName)

// 3. Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
    //person.homePlanet = "Earth"
    //console.log(person.homePlanet)

// 4. Update the person object with a method that logs "Arthur Dent is from planet Earth".
    //console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}.`)

// const product = {
//     name: "chair",
//     price: 24.99
// }
// 1. Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair.
// It costs $24.99".
    // const describeProduct = (product) => {
    //     return `The product is a ${product.name} and it costs ${product.price}`
    // }
    // console.log(describeProduct(product))

// 2. Write a function called totalWithTax that takes the product object as an argument and
// returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
    // const totalWithTax = (object) => {
    //     let tax = 24.99 * .07
    //     let totalPrice = tax + 24.99
    //     return totalPrice.toFixed(2)
    // }
    // console.log(totalWithTax(product))

// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"]
// }
// 1. Write the code that accesses the ingredients property.
    // console.log(lunch.ingredients)

// 2. Write the code that access the third ingredient of the lunch object.
    // console.log(lunch.ingredients[2])

// 3. Write a function that takes the lunch object as an argument and returns
// "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
    // const sandWitch = (object) => {
    //     return `The ingredients for a ${lunch.name} ${lunch.type} are: ${lunch.ingredients}`
    // }
    // console.log(sandWitch(lunch))

// 4. Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
    // const lunchOne = {
    //     name: "PB and Banana",
    //     type: "sandwich",
    //     ingredients: ["bread", "peanut butter", "banana"],
    //     getData: function () {
    //         return `the ingredients for a ${this.name} ${this.type} are ${this.ingredients}`
    //     }
    // }
    // console.log(lunchOne.getData())

// const animals = [
//     { name: "Waffles", type: "dog", age: 7 },
//     { name: "Fluffy", type: "cat", age: 14 },
//     { name: "Spelunky", type: "dog", age: 4 },
//     { name: "Hank", type: "cat", age: 11 }
// ]

// 1. Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
    // const catNames = animals.filter((value) => value.type === "cat")
    // console.log(catNames)

// 2. Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
    // const onlyName = animals.map((value) => value.name)
    // console.log(onlyName)

// 3. Create a function that takes in an array of animal objects and returns a new array of the names of the animals
// that are more than 10 years old.
    // const oldYeller = (object) => {
    //     return object.filter((value) => {
    //         if(value.age > 10) {
    //             return value.name
    //         }
    //     })
    // }
    // console.log(oldYeller(animals))

// 4. Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
    // const aboutAnimal = (object) => {
    //     return object.map((value) => {
    //         return `${value.name} is a ${value.type} and they are ${value.age} years young`
    //     })
    // }
    // console.log(aboutAnimal(animals))

// const author = {
//     name: "H. G. Wells",
//     genre: "science fiction"
// }

// 1. Write the code that destructures the author object so that the following code snippet will run successfully:
    // const { name, genre } = author
    // console.log(`${name} is a ${genre} author`)


// const pokeOne = {
//     species: "Charmandar",
//     pokemon_type: "Fire"
// }

// const pokeTwo = {
//     species: "Magikarp",
//     pokemon_type: "Water"
// }

// 1. Create a function called describePokemon that take an object like the ones above and uses destructuring to
// return a description of the Pokemon so that the following code snippet will run successfully:
    // const describePokemon = (poke) => {
    //     return `${poke.species} is a ${poke.pokemon_type} type pokemon`
    // }

// console.log(describePokemon(pokeOne))
    // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
    // output: "Magikarp is a Water pokemon"

// const triangleDimensions = {
//     base: 2,
//     height: 5
// }

// 1. Modify the triangleDimensions object to have a method that returns the area of the triangle.
// const triangleDimensionsOne = {
//     base: 2,
//     height: 5,
//     getData: function () {
//         return (this.base * this.height) /2
//     }
// }
// console.log(triangleDimensionsOne.getData())

// 2. Write the code that will update the base to be the value of 6.
// triangleDimensionsOne.base = 6;
// console.log(triangleDimensionsOne.getData())



//=======================================

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
// const person = {
//     firstName: "Seth",
//     lastName: "Crist"
// }
// console.log(person.firstName)
// console.log(person.lastName)

/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 */
const person = {
    firstName: "seth",
    lastName: "crist",
    fullName: function () {
        return `Hello ${this.firstName} ${this.lastName}, I hope you have a great day today`
    }
}
console.log(person.fullName())

