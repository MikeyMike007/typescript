type Combinable = number | string // type-alias
type ConversionDescriptor = 'as-number' | 'as-text' // type-alias

function combine2(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
): Combinable {
  let result: Combinable

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

const combineAges2 = combine2(30, 26, 'as-number')
console.log(combineAges2)

const combineNames2 = combine2('Name1', 'Name2', 'as-text')
console.log(combineNames2)
