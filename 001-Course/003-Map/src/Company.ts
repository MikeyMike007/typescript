import faker from 'faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }
  color: string = 'red'

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <h1 style="color: ${this.color}">Company Name: ${this.companyName}</h1>
      <h3 style="color: ${this.color}">catchPhrase: ${this.catchPhrase}</h3>`
  }
}
