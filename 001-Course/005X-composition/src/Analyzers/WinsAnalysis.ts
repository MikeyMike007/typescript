import { MatchData } from '../MatchData'
import { Analyzer } from '../Analyzer'
import { MatchResult } from '../MatchResult'

enum elementNumber {
  matchDate = 0,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  result,
  refreeName,
}

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0

    for (const match of matches) {
      if (
        match[elementNumber.homeTeam] === this.team &&
        match[elementNumber.result] === MatchResult.homeWin
      ) {
        wins++
      } else if (
        match[elementNumber.awayTeam] === this.team &&
        match[elementNumber.result] === MatchResult.awayWin
      ) {
        wins++
      }
    }
    return `Team ${this.team} has ${wins} wins}`
  }
}
