"use strict";
const userName = 'Max';
let age = 30;
age = 35;
console.log(userName);
console.log(age);
const add = (a, b) => {
    return a + b;
};
const add1 = (a, b) => a + b;
const printOutput = (output) => console.log(output);
console.log(add(10, 10));
console.log(add1(11, 1));
printOutput(10);
printOutput('Hello');
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => console.log(event));
}
const add2 = (a, b = 10) => a + b;
console.log(add2(10));
const hobbies = ['Sports', 'Cooking', 'Riding', 'Cars', 'Home deco'];
const activbeHobbies = ['Hiking'];
activbeHobbies.push(...hobbies);
const activeHobbies1 = ['Hiking', ...hobbies];
console.log(activbeHobbies);
console.log(activeHobbies1);
const person4 = {
    firstName: 'Max',
    myAge: 30,
};
const referencePerson = person4;
const copiedPerson = Object.assign({}, person4);
const add4 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const add5 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(add4(1, 1, 1, 1, 1));
console.log(add5(1, 1, 1));
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
console.log(hobby1);
console.log(hobby2);
const [hobby3, hobby4, ...remainingHobbies] = hobbies;
console.log(hobby3);
console.log(hobby4);
console.log(remainingHobbies);
const { firstName, myAge } = person4;
console.log(firstName);
console.log(myAge);
const { firstName: userName1, myAge: age1 } = person4;
console.log(userName1);
console.log(age1);
//# sourceMappingURL=app.js.map