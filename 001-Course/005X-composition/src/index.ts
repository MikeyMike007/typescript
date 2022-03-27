import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './ConsoleReport'
import { WinsAnalysis } from './Analyzers/WinsAnalysis'
import { Summary } from './Summary'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
summary.buildReport(matchReader.data)
