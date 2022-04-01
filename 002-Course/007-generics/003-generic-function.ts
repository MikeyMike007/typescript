interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value'
  if (element.length === 1) {
    descriptionText = "'Got 1 element"
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`
  }

  return [element, descriptionText]
}

console.log(['Sports', 'Cooking'])

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key]
}

extractAndConvert({ name: 'Max' }, 'name')
