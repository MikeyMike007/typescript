type User = { name: string; age: number }
const user1: User = { name: 'Firstname', age: 30 }
console.log(user1.name)

// COMPLICATED CODE
function greet(user: { name: string; age: number }): void {
  console.log(`Hi, i am ${user.name}`)
}

function isOlder(
  user1: { name: string; age: number },
  user2: { name: string; age: number }
): void {
  if (user1.age > user2.age) {
    console.log(`${user1.name} in older than ${user2.name}`)
  } else if (user1.age === user2.age) {
    console.log(`${user1.name} and ${user2.name} is of equal age`)
  } else {
    console.log(`${user1.name} younger than ${user2.name}`)
  }
}

greet({ name: 'Firstname', age: 30 })
isOlder({ name: 'Max', age: 30 }, { name: 'Eva', age: 35 })

// EASIER CODE WITH TYPE ALIASING

function greet1(user: User): void {
  console.log(`Hi, i am ${user.name}`)
}

function isOlder1(user1: User, user2: User): void {
  if (user1.age > user2.age) {
    console.log(`${user1.name} in older than ${user2.name}`)
  } else if (user1.age === user2.age) {
    console.log(`${user1.name} and ${user2.name} is of equal age`)
  } else {
    console.log(`${user1.name} younger than ${user2.name}`)
  }
}

greet1({ name: 'Firstname', age: 30 })
isOlder1({ name: 'Max', age: 30 }, { name: 'Eva', age: 35 })
