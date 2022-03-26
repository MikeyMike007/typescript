export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    // Arrow so this is always a attributes object and not a user object.
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data, update)
  }

  getAll(): T {
    return this.data
  }
}

// import { UserProps } from './User'
// const attrs = new Attributes<UserProps>({
//   id: 5,
//   age: 20,
//   name: 'Testname',
// })
//
// const name = attrs.get('name')
// const age = attrs.get('age')
// const id = attrs.get('id')
//
// WITHOUT CODE <K extends keyof T>(key: K): T[K]
// All keys would be of type string
// Now the keys are according to the types of UserProps
// console.log(typeof name) // string
// console.log(typeof age) // number
// console.log(typeof id) // number
