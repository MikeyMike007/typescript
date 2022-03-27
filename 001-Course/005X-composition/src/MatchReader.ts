import { DataReader } from './DataReader'
import { MatchData } from './MatchData'
import { MatchResult } from './MatchResult'
import { stringToDate } from './utils'

export class MatchReader {
  data: MatchData[]
  constructor(reader: DataReader) {
    this.data = reader.data.map((arr: string[]) => {
      return [
        stringToDate(arr[0]) as Date,
        arr[1] as string,
        arr[2] as string,
        parseInt(arr[3]) as number,
        parseInt(arr[4]) as number,
        arr[5] as MatchResult,
        arr[6] as string,
      ]
    })
  }
}
