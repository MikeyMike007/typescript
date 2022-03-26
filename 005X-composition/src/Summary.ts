import { MatchData } from './MatchData'
import { Analyzer } from './Analyzer'
import {ConsoleReport} from './ConsoleReport'


export class Summary {
  constructor(public analyzer: Analyzer, public consoleReport: ConsoleReport) {}

  buildReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches)
    this.consoleReport.print(output)
  }
}
