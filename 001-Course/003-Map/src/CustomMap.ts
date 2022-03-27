// DO NOT NEED THESE ANYMORE AFTER WE CREATED THE INTERFACE
// import { User } from './User'
// import { Company } from './Company'

export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
}

// WE WANT TO DELIMIT THE ACCESS TO THE GOOGLE MAP OBJECT. WE CAN DO THIS BY
// PUT IT IN A CLASS AND TO SET IT AS A PRIVATE VARIABLE.
export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }

  // OLD LESS EFFECTIVE METHOD 2
  // addMarker(mappable: User | Company ): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng
  //     }
  //   })
  // }

  // OLD LESS EFFETIVE METHOD 1
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   })
  // }
  //
  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }
}
