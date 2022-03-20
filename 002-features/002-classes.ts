class Vehicle {
  // THE COMMENTED CODE BELOW IS EXACTLY THE SAME AS
  //
  // color: string
  //
  // constructor(color: string) {
  //   this.color = color
  // }

  // SAME AS COMMENTED CODE ABOVE
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep')
  }
}

// IF THE CHILD CLASS DOESNT HAVE A CONSTRUCTOR, IT WILL CALL THE PARENT CONSTRUCTOR AUTOMATICALLY
class Car extends Vehicle {
  // PLEASE NOTE THAT WE DIDNT PUT ANOTHER MODIFIER (PUBLIC) IN FROMT OF COLOR SINCE WE DO NOT WANT TO ASSIGN THIS
  // VARIABLE TO THE CLASS CAR AS THIS VARIABLE BELONGS TO THE CLASS VEHICLE I.E. THE PARENT CLASS
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log('vroooooommm')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const vehicle = new Vehicle('orange')
const car = new Car(4, 'red')
console.log(car.color)
console.log(vehicle.color)
