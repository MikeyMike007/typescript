import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('Xaayb')

const numberSorter = new Sorter(numbersCollection)
const characterSorter = new Sorter(charactersCollection)

numberSorter.sort()
characterSorter.sort()

console.log(numberSorter.collection)
console.log(characterSorter.collection)
