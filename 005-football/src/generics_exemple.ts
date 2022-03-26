// VERY INEFFICIENT
class StringData {
  constructor(public data: string) {}
}

class NumbersData {
  constructor(public data: number) {}
}

const stringData = new StringData('abce')
const numbersData = new NumbersData(123)

console.log(stringData.data)
console.log(numbersData.data)

// BETTER WITH GENERICS
class anyData<T> {
  constructor(public data: T) {}
}

const stringDataG = new anyData<string>('abcde')
const numbersDataG = new anyData<number>(123)

console.log(stringDataG.data)
console.log(numbersDataG.data)
