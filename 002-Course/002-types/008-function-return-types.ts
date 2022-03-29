function printResult(num: number): void {
  console.log(`Result = ${num}`)
}

function printResult1(num: number): undefined {
  // You can also return undefined
  console.log(`Result = ${num}`)
  return // you need to use this to return undefined
}

printResult(1)
printResult1(1)
