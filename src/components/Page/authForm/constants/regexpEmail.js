//Проверка валидности email с помощью regexp
// eslint-disable-next-line
const VALID_EMAIL_REGEXP = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export {
  VALID_EMAIL_REGEXP
};