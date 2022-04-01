/*
 * INTERFACE decoratorExample MEANS THAT A VARIABLE OF THAT TYPE IS A
 * ARRAY OF OBJECTS THAT TAKE KEYS OF STRINGS AND HAS VALUES OF AN ARRAY OF STRINGS
 * THE KEYS CAN EITHER BE WRITTEN AS KEY OR ['KEY'] IT SEEMS
 */
interface decoratorExample {
  [className: string]: {
    [exampleKey: string]: string[]
  }
}

const exVar: decoratorExample = {}

exVar['exClass1'] = {
  title: ['required', 'must', 'serious'],
  price: ['positive'],
}

exVar['ExClass2'] = {
  ['animal']: ['cat'],
  ['mood']: ['happy'],
}

const testValidator1 = exVar['exClass1']
const testValidator2 = exVar['ExClass2']

for (const key in testValidator1) {
  console.log(`Key: ${key}`)
  for (const value of testValidator1[key]) {
    console.log(`Value: ${value}`)
  }
}

for (const key in testValidator2) {
  console.log(`Key: ${key}`)
  for (const value of testValidator2[key]) {
    console.log(`Value: ${value}`)
  }
}
