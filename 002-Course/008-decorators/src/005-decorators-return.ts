/*
 * HOW TO USE DECOARATORS WHEN INTANTIATING OBJECTS
 *
 * DECORATORS TO SETTERS / GETTERS, FUNCTIONS CAN RETURN
 */

function Logger3(logString: string) {
  console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate1(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function <T extends { new (...args: any[]): { name1: string } }>(
    orginalConstructor: T
  ) {
    return class extends orginalConstructor {
      constructor(..._: any[]) {
        super()
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h2')!.textContent = this.name1
        }
      }
    }
  }
}

@Logger3('HELLO')
@WithTemplate1('<h1>My Person Object</h1><h2></h2>', 'app')
class Person3 {
  name1 = 'max'

  constructor() {
    console.log('Creating person object')
  }
}

const person = new Person3()
