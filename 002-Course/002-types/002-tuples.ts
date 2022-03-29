const person3: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] // tuple - predefined array
} = {
  name: 'firstname',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author'],
}

// TUPLES
person3.role.push('admin') // Strangely allowed
// person3.role = [0, 'author', 'admin'] // ERROR
// person3.role[1] = 10 // ERROR
