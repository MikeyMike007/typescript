const config: {
  [input: string]: string[]
} = {}

const addValidator = (input: string, type: string) => {
  config[input] = config[input] ? [...config[input], type] : [type]
}

const RequiredN = (_: any, input: string) => addValidator(input, 'required')
const Maxlength = (_: any, input: string) => addValidator(input, 'maxlength')
const Positive = (_: any, input: string) => addValidator(input, 'positive')

const validateN = (course: any) =>
  Object.entries(config).every(([input, types]) =>
    types.every(
      (type) =>
        (type === 'required' && course[input]) ||
        (type === 'positive' && course[input] > 0) ||
        (type === 'maxlength' && course[input].length < 5)
    )
  )

class CourseN {
  @RequiredN @Maxlength title: string
  @RequiredN @Positive price: number

  constructor(title: string, price: number) {
    this.title = title
    this.price = price
  }
}

const courseFormN = document.querySelector('form')
courseFormN?.addEventListener('submit', (event) => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement
  const title = titleEl.value
  const price = parseInt(priceEl.value)

  const createdCourse = new CourseN(title, price)

  if (!validateN(createdCourse)) {
    alert('Invalid input, please try again')
    return
  }
  console.log(createdCourse)
})
