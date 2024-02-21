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
    getData: function () {
        return `Hello ${this.firstName} ${this.lastName}, I hope you have a great day today`
    }
}
console.log(person.getData())

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

// var shoppers = [
//     {name: 'Cameron', amount: 180},
//     {name: 'Ryan', amount: 250},
//     {name: 'George', amount: 320}
// ];

/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */