export function stringToDate(dateString: string): Date {
  const tmpDate = dateString.split('/')
  const myDate = new Date()
  myDate.setDate(parseInt(tmpDate[0]))
  myDate.setMonth(parseInt(tmpDate[1]) - 1)
  myDate.setFullYear(parseInt(tmpDate[2]))
  return myDate
}
