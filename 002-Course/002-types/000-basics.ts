function add(n1: number, n2: number): number {
  /*
   * WE COULD USE FOLLOWING CODE BUT NOT NEEDED IN TS.
   * TS WILL HANDLE IT FOR US.
   */
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect input')
  }
  return n1 + n2
}
// All numbers are float in TS
const number1 = 10
const number2 = 5
/*
 * ONLY ASSIGN TYPES TO UNDEFINED VARIABLES
 */
let number3: number
number3 = 100

/*
 * THIS IS NOT CONSIDERED AS BEST PRACTISE AND EVEN ESLINT THROWS A WARNING.
 */
let number4: number = 10

const result = add(number1, number2)

console.log(`${number1} + ${number2} = ${result}`)
