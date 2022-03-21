export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  displayMarkerSummary(): string
}

export class CustomMap {
  private map: google.maps.Map

  constructor(divId: string) {
    this.map = new google.maps.Map(document.getElementById(divId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    })
  }

  addMarker(item: Mappable) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
    })

    const window = new google.maps.InfoWindow({
      content: item.displayMarkerSummary(),
    })

    marker.addListener('click', () => {
      window.open({
        anchor: marker,
        map: this.map,
      })
    })
  }
}
