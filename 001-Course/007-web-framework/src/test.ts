class Model<T> {
  constructor(public modelParameter1: T, public modelParameter2: T) {}

  printModel() {
    console.log(this.modelParameter1)
    console.log(this.modelParameter2)
  }
}

class User extends Model<string> {}

const user = new User('hello', 'hello again')
user.printModel()
