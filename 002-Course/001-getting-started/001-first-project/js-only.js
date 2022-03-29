const button = document.querySelector('button')

/*
 * WARNING
 * FOLLOWING FUNCTIONS WILL RETURNS STRINGS
 * JS WILL NOT GIVE ANY WARNING OR ERROR MESSAGE.
 */
const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')

function add(num1, num2) {
  return num1 + num2
}

button.addEventListener('click', function () {
  /*
   * WARNING
   * BY ADDING TWO STRING INTO THE ADD FUNCTION
   * JS WILL BASICALLY CONCATENATE THE TWO STRINGS
   * AND RETURN IT. THIS MEANS THAT FOR EXAMPLE
   * 10 + 1 = 101 and NOT 11.
   * JS WILL NOT GENERATE ANY WARNING.
   * TYPESCRIPT SOLVES FOR THESE KIND OF PROBLEMS.
   */
  console.log(add(input1.value, input2.value))
})
