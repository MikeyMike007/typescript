"use strict";
// VERY INEFFICIENT
class StringData {
    constructor(data) {
        this.data = data;
    }
}
class NumbersData {
    constructor(data) {
        this.data = data;
    }
}
const stringData = new StringData('abce');
const numbersData = new NumbersData(123);
console.log(stringData.data);
console.log(numbersData.data);
// BETTER WITH GENERICS
class anyData {
    constructor(data) {
        this.data = data;
    }
}
const stringDataG = new anyData('abcde');
const numbersDataG = new anyData(123);
console.log(stringDataG.data);
console.log(numbersDataG.data);
