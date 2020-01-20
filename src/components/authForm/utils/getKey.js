//Ключ из обьекта с ошибками для отображения ошибок под каждым input
const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => key.toString() === value); 
}

export default getKeyByValue;