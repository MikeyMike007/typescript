const carMakers: string[] = ['ford', 'toyota', 'chevy']
const carMakersEmpty: string[] = [] // Instead of Any
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']]
const carsByMake1: string[][] = []

// Helo with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompitable values
//carMakers.push(100) // ERROR

// Help with map
carMakers.map((car: string): string => {
  console.log(car.toUpperCase()) // FORD TOYOTA
  return car.toUpperCase() // LSP understands
})

// Flexible types
const importantDates = [new Date(), '2030-10-10']
const importantDates1: (Date | string)[] = [new Date()]
importantDates1.push('Hello')
importantDates1.push(new Date())
// importantDates1.push(1) //ERROR
