"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const config = {};
const addValidator = (input, type) => {
    config[input] = config[input] ? [...config[input], type] : [type];
};
const RequiredN = (_, input) => addValidator(input, 'required');
const Maxlength = (_, input) => addValidator(input, 'maxlength');
const Positive = (_, input) => addValidator(input, 'positive');
const validateN = (course) => Object.entries(config).every(([input, types]) => types.every((type) => (type === 'required' && course[input]) ||
    (type === 'positive' && course[input] > 0) ||
    (type === 'maxlength' && course[input].length < 5)));
class CourseN {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    RequiredN,
    Maxlength
], CourseN.prototype, "title", void 0);
__decorate([
    RequiredN,
    Positive
], CourseN.prototype, "price", void 0);
const courseFormN = document.querySelector('form');
courseFormN === null || courseFormN === void 0 ? void 0 : courseFormN.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = parseInt(priceEl.value);
    const createdCourse = new CourseN(title, price);
    if (!validateN(createdCourse)) {
        alert('Invalid input, please try again');
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map