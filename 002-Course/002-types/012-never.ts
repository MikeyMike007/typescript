// Use type never for function that is never intended to return anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

generateError('An error occurred', 500)
