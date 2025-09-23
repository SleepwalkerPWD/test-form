//Значение из обьекта ошибок для реализоации error border и ошибки под input
const getErrorMessage = (object, valName) => {
  for (let key of Object.keys(object)) {
    if (valName === key) return object[key]
  }
}

export default getErrorMessage
