enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

enum Role1 {
  ADMIN,
  READ_ONLY = 100,
  AUTHOR,
}

enum Results {
  WIN = 'WIN',
  LOOSE = 'LOOSE',
  DRAW = 'DRAW',
}

const person4 = {
  name: 'Firstname',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
}

console.log(Role.ADMIN) // 0
console.log(Role.READ_ONLY) // 1
console.log(Role.AUTHOR) // 2

console.log(Role1.ADMIN) // 0
console.log(Role1.READ_ONLY) // 100
console.log(Role1.AUTHOR) // 101

console.log(Results.WIN) // WIN
console.log(Results.LOOSE) // LOOSE
console.log(Results.DRAW) // DRAW
//
console.log(person4.role) // 0
