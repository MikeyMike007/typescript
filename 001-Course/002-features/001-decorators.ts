class Boat {
  color = 'red'

  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError('Oops boat was sunk in the ocean')
  pilot(): void {
    throw new Error()
  }
}
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
    desc.value = function () {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot()

// // SAME AS
// testDecorator(Boat.prototype, 'pilot')
