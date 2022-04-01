"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger3(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate1(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (orginalConstructor) {
        return class extends orginalConstructor {
            constructor(..._) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h2').textContent = this.name1;
                }
            }
        };
    };
}
let Person3 = class Person3 {
    constructor() {
        this.name1 = 'max';
        console.log('Creating person object');
    }
};
Person3 = __decorate([
    Logger3('HELLO'),
    WithTemplate1('<h1>My Person Object</h1><h2></h2>', 'app')
], Person3);
const person = new Person3();
//# sourceMappingURL=005-decorators-return.js.map