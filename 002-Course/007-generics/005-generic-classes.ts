class DataStorage<T> {
  private data: T[] = []
  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item))
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
const numberStorage = new DataStorage<number>()
const objectStorage = new DataStorage<object>()

textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')
console.log(textStorage.getItems())

objectStorage.addItem({ name: 'Max', age: 30 })
numberStorage.addItem(1)

objectStorage.getItems()
numberStorage.getItems()
