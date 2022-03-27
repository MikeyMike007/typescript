interface Vehicle {
  name: string
  year: number
  broken: boolean
  summary(): string
}

interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

// REALLY LONG TYPE ANNOTATIONS WHICH IS NOT REALLY CONVENIENT
const printVehicle = (vehicle: {
  name: string
  year: number
  broken: boolean
}): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}

// THIS IS BETTER
const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}

// ANOTHER EXAMPLE
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printVehicle(oldCivic)
// PLEASE NOTE AT A MINIMUM, THE OLDCIVIC NEEDS TO HAVE ALL THE PROPERTIES AS DESCRIBED IN THE
// INTERFACE. THE OLDCIVIC WOULD STILL BE ABLE TO HAVE THE INTERFACE VEHICLE EVEN IF IT WOULD HAVE MORE PROPERTIES
// AND FUNCTIONALITIES AS DESCRIBED IN THE INTERFACE. THAT IS OKEY.
printVehicle1(oldCivic)

printSummary(oldCivic)
printSummary(drink)
