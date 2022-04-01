function Log(target: any, propertyName: string) {
  console.log('Property decorator')
  console.log(target) // Prototype of object
  console.log(propertyName) // title
}

function Log2(target: any, name: string, descriptior: PropertyDescriptor) {
  console.log('Accessor Decorator')
  console.log(target)
  console.log(name)
  console.log(descriptior)
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptior: PropertyDescriptor
) {
  console.log('Method Decorator')
  console.log(target)
  console.log(name)
  console.log(descriptior)
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive')
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

const p1 = new Product('Book', 10)
