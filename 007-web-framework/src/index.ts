import { UserForm } from './views/UserForm'
import { User } from './models/User'

const user = User.buildUser({ name: 'Name', age: 20 })

const userForm = new UserForm(document.getElementById('root'), user)

userForm.render()

// OLD
// user.events.on('change', () => {
//   console.log('heklo')
// })
//
// user.events.trigger('change')
//OLD
// const user = new User({ id: 1 })
// user.set({ name: 'NEW NAME' })
// user.set({ age: 999 })

// OLD
// setTimeout(() => {
//   console.log(user)
// }, 4000)
//
//
// OLD
// import { User } from './models/User'
//
// const user = new User({ name: 'myname', age: 20 })
// console.log(user.get('name'))
// console.log(user.get('age'))
// user.set({ name: 'newName', age: 9999 })
// console.log(user.get('name'))
// console.log(user.get('age'))
//
// user.set({ name: 'finalName' }) // Possible with the optionality questionmarks in interface UserProps
// console.log(user.get('name'))
// console.log(user.get('age'))
//
// // user.on('change', () => {})
// // user.on('change', () => {})
// // user.on('change', () => {})
// //
// user.on('change', () => {
//   console.log('Change #1')
// })
//
// user.on('change', () => {
//   console.log('Change #2')
// })
//
// user.on('save', () => {
//   console.log('Save was trigerred')
// })
// console.log(user)
//
// user.trigger('change')
// user.trigger('save')
