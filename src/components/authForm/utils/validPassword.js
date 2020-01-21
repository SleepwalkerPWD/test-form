//Валидация пароля
const validPassword = (value) => {
  let errors = { password: {}};

  const passwordNumberRegex = /[0-9]/g;
  const passwordUpperCaseLetters = /[A-Z]/g;
  const passwordLowerCaseLetters = /[a-z]/g;

  // if (!value) {
  //   errors.password.empty = "Пароль не должен быть пустым" ;
  // } else {
  //   errors.password.empty = '';
  // }
  
  if (!passwordNumberRegex.test(value)) {
    errors.password.number = "Пароль должен содержать одну цифру";
  } 
  if (!passwordUpperCaseLetters.test(value)) {
    errors.password.uppercase = "Пароль должен содержать одну большую букву";
  } 
  if (!passwordLowerCaseLetters.test(value)) {
    errors.password.lowercase = "Пароль должен содержать одну маленькую букву";
  } 
  if (value.length < 8) {
    errors.password.eight = "Пароль должен быть больше 8 символов";
  } 

  return errors;
}    

export default validPassword;
