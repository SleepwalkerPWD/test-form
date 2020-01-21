import { useState } from 'react';

import { INITIAL_PASS_ERRORS } from '../authForm/constants/inititalPassErrors';

const usePasswordForm = (validate) => {

  const [passValues, setPassValues] = useState({});
  const [passErrors, setPassErrors] = useState(INITIAL_PASS_ERRORS);

  const handleChangePass = (event) => {
    event.persist();
    const { value } = event.target;

    setPassValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setPassErrors(validate(value));
  };

  return {
    handleChangePass,
    passValues,
    passErrors,
  }
};

export default usePasswordForm;