const button = document.querySelector('button')
/*
 * TYPESCRIPT WILL KNOW THAT input1.value and input2.value ARE STRINGS.
 */
const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2') as HTMLInputElement

/*
 * TS HELPS US DEFINE THAT THE ARGUMENTS ARE NUMBER TYPES
 */
function add(num1: number, num2: number) {
  return num1 + num2
}

if (button) {
  button.addEventListener('click', function () {
    if (input1 && input2) {
      /*
       * IF I DONT CONVERT THE STRINGS TO NUMBERS WITH THE FUNCTION
       * parseInt(), TS WILL GENERATE AN ERROR.
       */
      console.log(add(parseInt(input1.value), parseInt(input2.value)))
    } else {
      throw new Error('Either no num1 or num2 ids defined in HTML doc')
    }
  })
} else {
  throw new Error('No button in HTML doc')
}
