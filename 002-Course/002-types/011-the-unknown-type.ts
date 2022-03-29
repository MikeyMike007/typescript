// USE type unknown WHEN U DONT KNOW WHAT TYPE THE DATA WILL BE.
// DONT USE type Any
let userInput: unknown
let userName: string | undefined

userInput = 5
userInput = 'Max'

if (typeof userInput === 'string') {
  userName = userInput
}

console.log(typeof userInput)
console.log(userName)
