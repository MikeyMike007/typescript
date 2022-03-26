class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

const arrayOfStrings = new ArrayOfStrings(['a', 'b', 'c'])
const arrayOfNumbers = new ArrayOfNumbers([1, 2, 3])

const arrayOfStrings1 = new ArrayOfAnything<string>(['a', 'b', 'c'])
const arrayOfNumbers1 = new ArrayOfAnything<number>([1, 2, 3])

console.log(arrayOfStrings.get(0))
console.log(arrayOfNumbers.get(0))
console.log(arrayOfStrings1.get(0))
console.log(arrayOfNumbers1.get(0))

// TYPE INFERENCE
const arrayOfStrings2 = new ArrayOfAnything(['a', 'b', 'c'])
const arrayOfNumbers2 = new ArrayOfAnything([1, 2, 3])
console.log(arrayOfStrings2)
console.log(arrayOfNumbers2)

// EXAMPLE OF GENERICS WITH FUNCTIONS
//
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printStrings(['a', 'b', 'c'])
printNumbers([1, 2, 3])
printAnything<string>(['a', 'b', 'c'])
printAnything<number>([1, 2, 3])
// TYPE INFERENCE
printAnything(['a', 'b', 'c'])
printAnything([1, 2, 3])

// GENERIC CONSTRAINTS
//
class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print() // ERROR T DOES NOT HAVE FUNCTION print
  }
}

printHousesOrCars<House>([new House(), new House(), new House()])
printHousesOrCars<Car>([new Car(), new Car(), new Car()])
