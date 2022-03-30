interface Person {
  name: string
  age: number
  greet(phrase: string): void
}

let user2: Person

user2 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  },
}

user2.greet('Hi there i am')
