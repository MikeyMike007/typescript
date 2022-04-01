/*
 * DECORATOR FACTORY
 */
function Logger1(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

@Logger1('LOGGING - PERSON')
class Person1 {
  name = 'Max'

  constructor() {
    console.log('Creating person object')
  }
}
// The decorator runs even without instantiation
const pers1 = new Person1()
console.log(pers1)
