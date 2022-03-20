let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

// Built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// WHEN TO USE ANNOTATIONS
// 1) FUNCTIONS THAT RETURN THE ANY TYPE
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json) // returns the Any type (The return type depends on whats in the input string)
console.log(coordinates) // {x: 10, y: 20}

// 2) WHEN WE DECLARE A VARIABLE ON ONE LINE AND INITIALIZE IT LATER
let words = ['red', 'green', 'blue']
let foundWord: boolean = false

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) VARIABLE WHOSE TYPE CANNOT BE INFERRED CORRECLTY
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false // boolean or number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

// Built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// WHEN TO USE ANNOTATIONS
// 1) FUNCTIONS THAT RETURN THE ANY TYPE
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json) // returns the Any type (The return type depends on whats in the input string)
console.log(coordinates) // {x: 10, y: 20}

// 2) WHEN WE DECLARE A VARIABLE ON ONE LINE AND INITIALIZE IT LATER
let words = ['red', 'green', 'blue']
let foundWord: boolean = false

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) VARIABLE WHOSE TYPE CANNOT BE INFERRED CORRECLTY
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false // boolean or number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
