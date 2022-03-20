const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// Lets create an array
const pepsiArr = ['brown', true, 40]
pepsiArr[0] = 40 // Loose info when swapping. Ok with arrays
pepsiArr[2] = true // Loose info when swapping. Ok with arrays

// Lets create a tuple
const pepsiTuple1: [string, boolean, number] = ['brown', true, 40]

// pepsiTuple[0] = 40 // Not allowed in tuple
// pepsiTuple[2] = true // Not allowed in tuple

// Lets create a new tuple wit the help of type-aliasing
type Drink = [string, boolean, number]
const pepsiTuple2: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 10]

// tuples not really useful in ts
// See example
const carSpecs: [number, number] = [400, 3354]
// Compare this to an object
const carStats = {
  horsepower: 400,
  weigth: 3354
}
