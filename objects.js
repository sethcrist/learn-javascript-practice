const person = {
    firstName: "Arthur",
    lastName: "Dent"
}
// 1. Write the code that accesses the first name of the person object.
console.log(person.firstName)
// 2. Write the code that accesses the last name of the person object.
console.log(person.lastName)
// 3. Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person.homePlanet)
// 4. Update the person object with a method that logs "Arthur Dent is from planet Earth".
console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}.`)
