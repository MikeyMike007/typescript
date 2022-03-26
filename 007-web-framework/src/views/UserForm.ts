import { User } from '../models/User'

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  onButtonClick(): void {
    console.log('Hi there')
  }

  onHeaderHover(): void {
    console.log('H1 was hovered over')
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onSetAgeClick,
    }
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div> User name: ${this.model.get('name')}</div>
        <div> User age: ${this.model.get('age')}</div>
        <input/>
        <button>Click me</button>
        <button class="set-age">Set random age</button>
      </div>
      `
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render(): void {
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}