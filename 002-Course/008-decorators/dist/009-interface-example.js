"use strict";
const exVar = {};
exVar['exClass1'] = {
    title: ['required', 'must', 'serious'],
    price: ['positive'],
};
exVar['ExClass2'] = {
    ['animal']: ['cat'],
    ['mood']: ['happy'],
};
const testValidator1 = exVar['exClass1'];
const testValidator2 = exVar['ExClass2'];
for (const key in testValidator1) {
    console.log(`Key: ${key}`);
    for (const value of testValidator1[key]) {
        console.log(`Value: ${value}`);
    }
}
for (const key in testValidator2) {
    console.log(`Key: ${key}`);
    for (const value of testValidator2[key]) {
        console.log(`Value: ${value}`);
    }
}
//# sourceMappingURL=009-interface-example.js.map