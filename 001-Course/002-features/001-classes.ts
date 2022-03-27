class Vehicle {
  // CODE BELOW IS COMMENTED SINCE OTHERWISE WE GET AN ERROR THAT SAYS
  // CLASS CAR INCORRECTLY EXTENDS CLASS VEHICLE SINCE PROPERTY drive()
  // IS PUBLIC IN SUPERCLASS AND PRIVATE IN CHILDCLASS. I.E. THE MODIFIERS (PRIVATE, PUBLIC, PROTECTED)
  // NEEDS TO BE EQUAL IN THE SUPERCLASS ASWELL AS IN THE OVERRIDDEN FUNCTION IN THE CHILD CLASS.

  // public drive(): void {
  //   console.log('chugga chugga')
  // }

  // SINCE THE METHOD IS PROTECTED, IT CAN ONLY BE CALLED FROM THE SUPERCLASS (THIS CLASS VEHICLE) OR
  // ITS CHILDCLASS (CAR)
  protected honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  // OVERRIDE SUPERCLASS METHOD
  private drive(): void {
    console.log('vroooooommm')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const vehicle = new Vehicle()

// NOT ALLOWED SINCE honk() IS PROTECTED
// vehicle.honk()

const car = new Car()
// NOT ALLOWED SINCE PROTECTED
// car.drive()

// THIS WORKS SINCE THE drive() FUNCTION PRIVATE AND IS CALLED FROM WITHIN THE CLASS. ALSO,
// THE honk() FUNCTION WHICH IS INHERITED FROM THE SUPERCLASS IS PROTECTED, THIS MEANS THAT IT IS POSSIBLE
// TO CALL THIS FUNCTION FROM WITHIN THE CHILD CLASS
car.startDrivingProcess()
