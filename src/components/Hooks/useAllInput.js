import { useState } from 'react';

import { 
  INITIAL_VALUES,
  VALID_EMAIL_REGEXP
 } from '../Page/authForm/constants';

import countErrors from '../Page/authForm/utils/countErrors';
import validateForm from '../Page/authForm/utils/validateForm';

const useAllInput = () => {

const [values, setValues] = useState(INITIAL_VALUES);
  
const handleUserInput = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  let errors = values.errors;

  switch (name) {
    case 'userName': 
      errors.userName = 
        value.length < 5
          ? 'Name at least 5 symbols'
          : '';
      break;
    case 'country':
      errors.country = 
        !value.length
          ? 'Choose country'
          : '';
      break;
    case 'email': 
      errors.email = 
      VALID_EMAIL_REGEXP.test(value)
          ? ''
          : 'Invalid email';
      break;
    default:
      break;
  }

  setValues({
    ...values,
    formValid: validateForm(values.errors),
    errors,
    errorCount: countErrors(values.errors),
    [name]: value
  });
}

  return {
    handleUserInput,
    values,
    setValues
  }
};

export default useAllInput;