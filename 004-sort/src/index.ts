import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('Xaayb')
const linkedListCollection = new LinkedList()
linkedListCollection.add(500)
linkedListCollection.add(-10)
linkedListCollection.add(-3)
linkedListCollection.add(4)

numbersCollection.sort()
charactersCollection.sort()
linkedListCollection.sort()

console.log(numbersCollection.data)
console.log(charactersCollection.data)
linkedListCollection.print()
