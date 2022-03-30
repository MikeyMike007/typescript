// PLEASE NOTE THAT YOU CANNOT INSTANTIATE FROM AN ABSTRACT CLASS
abstract class Department3 {
  protected employees: string[] = [] // ACCESSIBLE FROM CLASS AND CHILD CLASS

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name }
  }

  static fiscalyear = 2020

  // describe(this: Department3) {
  //   console.log(`Department: ${this.name} - ID: ${this.id}`)
  // }

  abstract describe(this: Department3): void
  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department3 {
  private lastReport: string
  private static instance: ITDepartment
  // admins: string[] = []
  // If you dont specify any constructor, the child class
  // will get the partents constructor function
  //
  //
  // CANNOT CALL NEW ON THIS - NEED TO INSTANTIATE THROUGH INSIDE THE CLASS I.E FROM a static METHOD
  // THIS IS CALLED A SINGLETON
  private constructor(id: string, private reports: string[]) {
    // this.admins = admins // ERROR - MUST BE PUT AFTER SUPER CALL
    super(id, 'IT')
    this.lastReport = reports[0]
    // this.admins = admins // OK
  }

  // Getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found')
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('ERROR')
    }
    this.addReport(value)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }

  addEmployee(name: string): void {
    if (name === 'Max') {
      return
    }
    this.employees.push(name)
  }

  // OVERRIDE
  //   describe() {
  //     console.log(`IT Department ID: ${this.id}`)
  //   }
  // }

  // NEED TO IMPLEMENT SINCE ABSTRACT
  describe() {
    console.log(`IT Department ID: ${this.id}`)
  }

  static getInstance() {
    if (ITDepartment.instance) {
      return this.instance
    }

    this.instance = new ITDepartment('d2', [])
    return this.instance
  }
}

const it = ITDepartment.getInstance() // THE SINGLETON MAKES THAT YOU CAN ONLY INSTANTIATE IT ONCE AND THAT FROM INSIDE THE CLASS
const it2 = ITDepartment.getInstance() // ITS NOT A NEW DEPARTMENT, NOW it and it2 WILL BE THE SAME OBJECT
it.describe()
it2.describe()
it.name = 'NEW NAME'
it.printEmployeeInformation()
console.log(it)
// ACCESS THE GETTER
console.log(it.mostRecentReport)
it.mostRecentReport = 'Report1'
console.log(it.mostRecentReport)

const employee = Department3.createEmployee('Max')
console.log(employee)
// console.log(it.fiscalyear) // ERROR SINCE STATIC
console.log(Department3.fiscalyear)
it.describe()
