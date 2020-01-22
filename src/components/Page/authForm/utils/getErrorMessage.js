//Значение из обьекта ошибок для реализоации error border и ошибки под input
const getErrorMessage = (object, val) => {
  for (let value in object) {
    if(val === value)
    return object[value];
  }
}

export default getErrorMessage;