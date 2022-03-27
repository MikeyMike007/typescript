interface Report {
  print(result: string): void
}

export class ConsoleReport implements Report {
  print(result: string) {
    console.log(result)
  }
}
