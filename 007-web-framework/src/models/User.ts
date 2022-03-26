import { Eventing } from './Eventing'
import { ApiSync } from './ApiSync'
import { Attributes } from './Attributes'
import { Model } from './Model'
import { Collection } from './Collection'

export interface UserProps {
  id?: number
  name?: string // Optional
  age?: number // Optional
}

const rootUrl = 'http://localhost:3000/users'
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://localhost:3000/users',
      (json: UserProps) => User.buildUser(json)
    )
  }

  //   return this.get('id') === 1
  // }

  // // Example of another buildUser function
  // static buildLocalUser(attrs: UserProps): User {
  //   return new User(
  //     new Attributes<UserProps>(attrs),
  //     new Eventing(),
  //     new LocalSync<UserProps>(rootUrl)
  //   )
  // }
}