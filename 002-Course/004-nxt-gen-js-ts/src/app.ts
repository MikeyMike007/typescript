/*
 * let and const
 */
const userName = 'Max'
// userName = 'Anders' // ERROR SINCE CONST
let age = 30
age = 35 // Ok since let

console.log(userName)
console.log(age)

/*
 * Arrow functions
 */

const add = (a: number, b: number): number => {
  return a + b
}

const add1 = (a: number, b: number): number => a + b // SAME AS ABOVE

const printOutput: (a: number | string) => void = (output) =>
  console.log(output)

console.log(add(10, 10))
console.log(add1(11, 1))
printOutput(10)
printOutput('Hello')

const button = document.querySelector('button')

if (button) {
  button.addEventListener('click', (event) => console.log(event))
}

/*
 * Default function parameters
 */

const add2 = (a: number, b: number = 10): number => a + b // SAME AS ABOVE
console.log(add2(10))

/*
 * The Spread operator (...)
 */
const hobbies = ['Sports', 'Cooking', 'Riding', 'Cars', 'Home deco']
const activbeHobbies = ['Hiking']

// activbeHobbies.push(hobbies) // ERROR - Argument of type string[] is not assinable to parameter of type string

activbeHobbies.push(...hobbies)
const activeHobbies1 = ['Hiking', ...hobbies]

console.log(activbeHobbies)
console.log(activeHobbies1)

const person4 = {
  firstName: 'Max',
  myAge: 30,
}

const referencePerson = person4 // NOT A COPY - A REFERENCE THAT POINTS TO person4 IN MEMORY
const copiedPerson = { ...person4 } // A COPY

/*
 * Rest parameters
 */

const add4 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

// TUPLE
const add5 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

console.log(add4(1, 1, 1, 1, 1)) //5
console.log(add5(1, 1, 1)) // 3
// console.log(add5(1, 1, 1, 1)) // ERROR

/*
 * Array and obhect destructuring
 */

// OLD WAY
const hobby1 = hobbies[0]
const hobby2 = hobbies[1]
console.log(hobby1) // Sports
console.log(hobby2) // Cooking

// NEW WAY - destructuring

// Variable names can be arbitary
const [hobby3, hobby4, ...remainingHobbies] = hobbies

console.log(hobby3) // Sports
console.log(hobby4) // Cooking
console.log(remainingHobbies) // ['Riding', 'Cars', 'Home deco']

// Variable names must match the object variable names
const { firstName, myAge } = person4

console.log(firstName) // Max
console.log(myAge) // 30

// You can also assign to other variables with
const { firstName: userName1, myAge: age1 } = person4
console.log(userName1) // Max
console.log(age1) // 30
