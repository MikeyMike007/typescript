function combine1(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // Literal - Can only take these values
): number | string {
  let result: number | string

  if (
    typeof input1 === 'number' &&
    typeof input2 === 'number' &&
    resultConversion === 'as-number'
  ) {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }

  return result
}

const combineAges1 = combine1(30, 26, 'as-number')
console.log(combineAges1)

const combineNames1 = combine1('Name1', 'Name2', 'as-text')
console.log(combineNames1)
