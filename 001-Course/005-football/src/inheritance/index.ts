import { MatchResult } from './MatchResult'
import { MatchReader } from './MatchReader'

let manUnitedWins = 0
const reader = new MatchReader('football.csv')

for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
    manUnitedWins++
  }
}
console.log(`Manchester United won ${manUnitedWins} games`)
