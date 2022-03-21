import faker from '@faker-js/faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
    // this.location.lat = parseFloat(faker.address.latitude())
    // this.location.lng = parseFloat(faker.address.longitude())
  }

  displayMarkerSummary(): string {
    return `<h1>Name: ${this.name}</h1>`
  }
}
