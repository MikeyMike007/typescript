import { NumbersCollection } from './NumbersCollection'
import { CharacterCollection } from './CharacterCollection'

const numbersCollection = new NumbersCollection([4, 5, 7, 9, -1])
const characterCollection = new CharacterCollection('hellowonderfulfamily')
numbersCollection.sort()
characterCollection.sort()
console.log(numbersCollection.data)
console.log(characterCollection.data)
