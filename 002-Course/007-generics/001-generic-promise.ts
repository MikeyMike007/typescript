/*
 * GENERICS
 */

const names: Array<string> = []

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello')
  }, 2000)
})

promise.then((data) => {
  data.split('')
  console.log(data)
})
