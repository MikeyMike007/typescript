"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchester United won ${manUnitedWins} games`);
// JAVASCRIPT VERSION
//
// const matches = fs
//   .readFileSync('football.csv', {
//     encoding: 'utf8',
//   })
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',')
//   })
//
// let manUnitedWins = 0
//
// for (const match of matches) {
//   if (match[1] === 'Man United' && match[5] === 'H') {
//     manUnitedWins++
//   } else if (match[2] === 'Man United' && match[5] === 'A') {
//     manUnitedWins++
//   }
// }
// console.log(`Manchester United won ${manUnitedWins} games`)
