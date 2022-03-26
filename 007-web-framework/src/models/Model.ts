import { AxiosPromise, AxiosResponse } from 'axios'

interface ModelAttributes<T> {
  set(value: T): void
  getAll(): T
  get<K extends keyof T>(key: K): T[K]
}

interface HasId {
  id?: number
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

interface Events {
  on(eventName: string, callback: () => void): void
  trigger(eventName: string): void
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // You can also have getter functions
  // Which is meaybe better
  // This would not have worked if the initiations of the constructor arguments
  // would be initiated inside the constructor function
  on = this.events.on // Return reference of function
  trigger = this.events.trigger // Return reference of function
  get = this.attributes.get // Return reference of function

  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.get('id')

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id')
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data)
    })
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save')
      })
      .catch(() => {
        this.trigger('error')
      })
  }
}
