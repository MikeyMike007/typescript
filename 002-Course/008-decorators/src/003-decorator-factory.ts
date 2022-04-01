/*
 * DECORATOR FACTORY
 * CAN BE USED TO RENDER INFO ON SCREEN
 */

function Logger2(logString: string) {
  console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h2')!.textContent = p.name
    }
  }
}

@Logger2('HELLO')
@WithTemplate('<h1>My Person Object</h1><h2></h2>', 'app')
class Person2 {
  name = 'Max'

  constructor() {
    console.log('Creating person object')
  }
}
