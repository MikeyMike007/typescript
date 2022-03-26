import { MatchResult } from './MatchResult'
export type MatchData = [
  matchDate: Date,
  homeTeam: string,
  awayTeam: string,
  homeScore: number,
  awayScore: number,
  matchResult: MatchResult,
  refreeName: string
]
