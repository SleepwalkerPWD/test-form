//Валидация пароля
const validPassword = (value) => {
  let errors = { password: {}};

  const passwordNumberRegex = /[0-9]/g;
  const passwordUpperCaseLetters = /[A-Z]/g;
  const passwordLowerCaseLetters = /[a-z]/g;
  
  if (!passwordNumberRegex.test(value)) {
    errors.password.number = "One number";
  } 
  if (!passwordUpperCaseLetters.test(value)) {
    errors.password.uppercase = "One Uppercase character";
  } 
  if (!passwordLowerCaseLetters.test(value)) {
    errors.password.lowercase = "One lowercase character";
  } 
  if (value.length < 8) {
    errors.password.eight = "At least 8 symbols";
  } 

  return errors;
}    

export default validPassword;
