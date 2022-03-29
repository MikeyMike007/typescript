function combine(
  input1: number | string,
  input2: number | string
): number | string {
  let result: number | string

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }

  return result
}

const combineAges = combine(30, 26)
console.log(combineAges)

const combineNames = combine('Name1', 'Name2')
console.log(combineNames)
