/*
 * BOTH TYPE AND INTERFACE WORKS WITH FUNCTIONS
 * ALMOST THE SAME THING
 */
type AddFn1 = (a: number, b: number) => number

interface AddFn2 {
  (a: number, b: number): number
}

const add1: AddFn1 = (n1: number, n2: number): number => {
  return n1 + n2
}

const add2: AddFn2 = (n1: number, n2: number): number => {
  return n1 + n2 + 10
}

/*
 * INTERFACES AND CLASSES
 */
interface Named {
  readonly name: string // CAN ONLY BE READ
  nickName?: string // Its optional to have this property
}
interface Greetable extends Named {
  greet(phrase: string): void
}

class Person implements Greetable {
  public nickName: string | undefined = undefined
  constructor(public name: string) {}
  /*
   * You can also use an optional constructor / function parameter with
   * setting an ? after the variable name.
   */
  // constructor(public name: string, public nickname?: string) {}
  greet(phrase: string) {
    if (this.nickName) {
      console.log(`${phrase} ${this.nickName}`)
    } else {
      console.log(`${phrase} ${this.name}`)
    }
  }
}

const person = new Person('Johan')
person.greet('Hello')
person.nickName = 'Jompe'
person.greet('Hello')
console.log(add1(10, 10))
console.log(add2(20, 20))
