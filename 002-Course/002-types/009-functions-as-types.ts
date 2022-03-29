function add1(n1: number, n2: number): number {
  return n1 + n2
}

function printResult2(num: number): void {
  console.log(`Result = ${num}`)
}

let combineResults: (a: number, b: number) => number
combineResults = add1
console.log(combineResults(10, 10))

// combineResults = printResult2 // ERROR
