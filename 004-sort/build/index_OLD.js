"use strict";
class Sorter {
    // collection: number[]
    //
    // constructor(collection: number[]) {
    //   this.collection = collection
    // }
    // FOLLOWING CODE IS SAME AS ABOVE - JUST SHORTER AND MORE EFFICIENT
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // ALL OF THIS ONLY WORKS IF COLLECTION IS number[]
                // IF COLLECTION IS AN ARRAY OF NUMBERS
                if (this.collection instanceof Array) {
                    // typeguard
                    // collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // ONLY GOING TO WORK IF COLLECTION IS STRING
                // IF COLLECTION IS A STRING; DO THIS LOGIC INSTEAD:
                // LOGIC TO COMPARE AND SWAP CHARACTERS IN A STRING
                if (typeof this.collection === 'string') {
                }
                // if (this.collection instanceof LinkedList)
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
