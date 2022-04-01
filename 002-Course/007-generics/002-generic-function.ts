function merge(objA: object, objB: object) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Max' }, { age: 30 })
// console.log(mergedObj.age) // ERROR

// CAN SOLVE PROBLEM WITH THIS BUT NOT ELEGANT
const mergedObj1 = merge({ name: 'Max' }, { age: 30 }) as {
  name: string
  age: number
}

console.log(mergedObj1.age)

// BETTER SOLUTION IS GENERICS

function merge1<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB)
}

const mergedObj2 = merge1({ name: 'Max' }, { age: 30 })
console.log(mergedObj2.name)
console.log(mergedObj2.age)

// CAN ALSO BE VERY SPECIFIC
const mergedObj3 = merge1<{ name: string }, { age: number }>(
  { name: 'Max' },
  { age: 30 }
)

console.log(mergedObj3.name)
console.log(mergedObj3.age)

// CAN BE ALSO VERY SPECIFIC THAT T AND U ARE OBJECTS
// THIS IS CALLED CONSTRAINTS
function merge2<T extends Object, U extends Object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB)
}
