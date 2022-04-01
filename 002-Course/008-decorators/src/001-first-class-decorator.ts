function Logger(constructor: Function) {
  console.log('Logging....')
  console.log(constructor)
}

@Logger
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object')
  }
}
// The decorator runs even without instantiation
const pers = new Person()
console.log(pers)
