// Defining a object in TS
const person1: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: 'Firstname',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
}

// Defining a object in TS
const product: {
  id: string
  price: number
  tags: string[]
  details: {
    title: string
    description: string
  }
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand new',
  },
}

console.log(person1.name)
console.log(product.details.description)

// THIS WILL GENERATE AN ERROR SINCE 'Sports' IS NOT AN ARRAY
// const favoriteActivities: string[] = 'Sports'
// BETTER USE
const favoriteActivities: string[] | string = 'Sports'
console.log(favoriteActivities)

for (const hobby of person1.hobbies) {
  // TS KNOWS THAT hobby is a string
  console.log(hobby.toUpperCase())
}
