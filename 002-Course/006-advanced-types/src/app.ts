/*
 * INTERSECTION TYPES
 */

// COULD ALSO USE INTERFACES
type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// COULD ALSO DO
// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable & Numeric

/*
 * TYPE GUARDS
 */

function add(a: Combinable, b: Combinable) {
  // TYPE GUARD
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`)
  // console.log(`Privileges: ${emp.privileges}`) // ERROR - NEED TYPE GUARD SINCE IT IS NOT CERTAIN THAT privileges exist
  if ('privileges' in emp) {
    console.log(`Priviliges: ${emp.privileges}`)
  }

  if ('startDate' in emp) {
    console.log(`Start date: ${emp.startDate}`)
  }
}

printEmployeeInformation(e1)
printEmployeeInformation({ name: 'Manu', startDate: new Date() })

class Car {
  drive() {
    console.log(`Driving...`)
  }
}

class Truck {
  drive() {
    console.log(`Driving a truck....`)
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`)
  }
}
type Vehicle = Car | Truck

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    // Instanceof cannot be used with classes
    vehicle.loadCargo(100)
  }
}

const v1 = new Car()
const v2 = new Truck()

useVehicle(v1)
useVehicle(v2)

/*
 * DISCRIMINATED UNIONS
 */

interface Bird {
  flyingSpeed: number
  type: 'bird' // DISCRIMINATED UNION - CAN ONLY TAKE VALUE BIRD
}

interface Horse {
  runningSpeed: number
  type: 'horse' // DISCRIMINATED UNION - CAN ONLY TAKE VALUE HORSE
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed
  // if (animal instanceof Bird) // DOESNT WORK WITH INTERFACES
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
  }

  console.log(`Moving with speed: ${speed}`)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })
// moveAnimal({ type: 'bird', runningSpeed: 10 }) // ERROR
moveAnimal({ type: 'horse', runningSpeed: 100 })

/*
 * TYPE CASTING
 */

// FOLLOWING IS THE SAME THING
const userInputElement1 = <HTMLInputElement>(
  document.getElementById('message-output-1')
) // type casting
const userInputElement2 = document.getElementById(
  'message-output-2'
) as HTMLInputElement // type casting
//
userInputElement1.value = 'Hi there'
userInputElement2.value = 'Whatsup'

/*
 * Index properties
 */

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a special character',
}

console.log(errorBag['email'])

/*
 * Function overloads
 */

const result1 = add('Max', 'Schwarz')
const result2 = add(10, 10)
// HOW CAN TYPESCRIPT KNOW THAT RESULT1 IS A STRING AND RESULT2 IS A NUMBER

// YOU CAN USE FOLLOWING BUT NOT OPTIMAL
const result3 = add('Max', 'Schwarz') as string

// YOU CAN ALSO USE FUNCTION OVERLOADS
function add1(a: number, b: number): number
function add1(a: string, b: string): string
function add1(a: Combinable, b: Combinable) {
  // TYPE GUARD
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const result4 = add('Max', 'Schwarz')
const result5 = add(10, 10)

// TS NOW KNOWS THAT RESULT4 IS A STRING AND RESULT5 IS A NUMBER

/*
 * OPTIONAL CHAINING
 */

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
}

// NOT SURE IF DATA IS RETRIEVED FROM API?
// USE OPTIONAL CHAINING
// if fetchedUserData exists, access job, if job exists, access title

console.log(fetchedUserData?.job?.title)

/*
 * NULLISH COALESCING
 */

let userInput = null
let storedData = userInput || 'DEFAULT' // 'DEFAULT'

userInput = ''
storedData = userInput || 'DEFAULT' // DEFAULT

// BUT WHAT IF WE WANT storedDATA BE ''?
// THEN WE USE
storedData = userInput ?? 'DEFAULT' // ''
