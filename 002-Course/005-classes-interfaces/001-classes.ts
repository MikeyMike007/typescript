/*
 * Creating a first class
 * Constructor functions and this keyword
 */

class Department {
  name: string

  constructor(n: string) {
    this.name = n
  }

  describe() {
    console.log(`Department: ${this.name}`)
  }
}

const accounting = new Department('Accounting')
accounting.describe()

const accountingCopy = { describe: accounting.describe }
/*
 * Following returns undefined. One could have thought that it would return
 * Department: Accounting but since the variable this always refers to the
 * object that is calling the this pointer will point to the accoutingCopy
 * object which doesnt have a this.name
 */
accountingCopy.describe() // Undefined

// THIS CAN BE SOLVED WITH FOLLOWING CODE

class Department1 {
  name: string

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department1) {
    // WORS ALSO WITHOUT THIS
    console.log(`Department: ${this.name}`)
  }
}

const accounting1 = new Department1('Accounting')
const accounting1Copy = { name: 'DUMMY', describe: accounting1.describe }
accounting1Copy.describe()

/*
 * private and public access modifiers
 */

class Department2 {
  private employees: string[] = [] // Can only be accessed from method inside a class
  /*
  * INSTEAD OF THIS:
  private id: string
  private name: string

  constructor(id: string, n: string) {
    this.id = id
    this.name = n
  }

  WE CAN DO THIS
  */

  // The variable id is of of type readonly - that means that after initialization by the constructor
  // This value can only be read and not changed.
  constructor(private readonly id: string, public name: string) {}

  describe(this: Department2) {
    // WORS ALSO WITHOUT THIS
    console.log(`Department: ${this.name} - ID: ${this.id}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting2 = new Department2('id0', 'Accounting')
accounting2.addEmployee('Max')
accounting2.addEmployee('Maria')
accounting2.describe()
accounting2.printEmployeeInformation()
// accounting2.employees[3] = 'Anna' // not allowed since private
