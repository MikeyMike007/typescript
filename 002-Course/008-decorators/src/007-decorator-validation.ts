// Decorator functions

interface ValidatorConfig {
  [property: string]: {
    [validatetableProp: string]: string[] // ['required', 'positive']
  }
}

const registeredValidators: ValidatorConfig = {}

// function Required(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: ['required'],
//   }
// }

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []), // returns [] if left side of ?? is null or undefined
      'required',
    ],
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []), // returns [] if left side of ?? is null or undefined
      'positive',
    ],
  }
}

// ['Course'] {
//   ['title']: ['required'],
//   ['price']: ['positive']
// }

function validate(obj: any) {
  const objectValidatorConfig = registeredValidators[obj.constructor.name]
  if (!objectValidatorConfig) {
    return true
  }
  let isValid = true
  for (const prop in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0
          break
      }
    }
  }
  return isValid
}

class Course {
  @Required
  title: string
  @PositiveNumber
  price: number

  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}

const courseForm = document.querySelector('form')
courseForm?.addEventListener('submit', (event) => {
  console.log('hello')
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement
  const title = titleEl.value
  const price = parseInt(priceEl.value)

  // You can validate input with following code
  // But better to use decorator instead
  // if (title.trim().length <= 0) {
  //   throw new Error('You need to enter valid course name')
  // }
  const createdCourse = new Course(title, price)

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again')
    return
  }
  console.log(createdCourse)
})
