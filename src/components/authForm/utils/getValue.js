//Значение из обьекта ошибок для реализоации error border и ошибки под input
const getValue = (object, val) => {
  for (let value in object) {
    if(val === value)
    return object[value];
  }
}

export default getValue;