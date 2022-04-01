function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  console.log(descriptor)
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjDescriptor
}

class Printer {
  message = 'This works'
  @Autobind
  showMessage() {
    console.log(this.message)
  }
}

const printer = new Printer()
const button = document.querySelector('button')
button?.addEventListener('click', printer.showMessage)

// OR YOU CAN SOLVE IT WITH
// YOU NEED TO BIND ITR OTHERWISE undefined
const newPrinter = new Printer()
const buttonN = document.querySelector('button')
buttonN?.addEventListener('click', newPrinter.showMessage.bind(newPrinter))
