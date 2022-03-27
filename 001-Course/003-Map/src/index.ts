import { CustomMap } from './CustomMap'
import { User } from './User'
import { Company } from './Company'

// IN ORDER FOR THIS TO WORK, YOU NEED TO INSTALL @types/google.maps
const user = new User()
const company = new Company()
const customMap = new CustomMap('map')

customMap.addMarker(user)
customMap.addMarker(company)
