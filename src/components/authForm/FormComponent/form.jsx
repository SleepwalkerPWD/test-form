import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import countErrors from '../utils/countErrors';
import validateForm from '../utils/validateForm';
import getErrorMessage from '../utils/getErrorMessage';
import validPassword from '../utils/validPassword';

import InputComponents from './InputComponents';
import usePasswordForm from '../../Hooks/usePasswordForm';

import { 
  INPUT_PROPS,
  INITIAL_VALUES,
  VALID_EMAIL_REGEXP
 } from '../constants';

import { 
  FormWrapper,
  FormValue,
  PasswordRulesListStyled,
  PasswordRulesListItemStyled,
  FormButtonStyled,
  FormButtonGoogleStyled,
  FormWrapperGoogleButtonStyled,
  FormGoogleLogoStyled,
  FormDivPolicyStyled,
  PolicyStyled,
  FormLineStyled,
  FormOrStyled,
  FormBackgroundWrapper,
  FormFooterStyled
} from './styled'

const Form = () => {
  const [values, setValues] = useState(INITIAL_VALUES);

  const {
    passErrors,
    handleChangePass
  } = usePasswordForm(validPassword);

  const handleUserInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = values.errors;

    switch (name) {
      case 'userName': 
        errors.userName = 
          value.length < 5
            ? 'Имя должно быть больше 5 символов'
            : '';
        break;
      case 'country':
        errors.country = 
          !value.length
            ? 'Выберите страну'
            : '';
        break;
      case 'email': 
        errors.email = 
        VALID_EMAIL_REGEXP.test(value)
            ? ''
            : 'Не верно указан email';
        break;
      default:
        break;
    }

    setValues({
      ...values,
      formValid: validateForm(values.errors),
      errors,
      errorCount: countErrors(values.errors),
      errorCountPassword: countErrors(passErrors.password),
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Valid!!!!!')

    setValues({
      ...values,
      formValid: validateForm(values.errors)
    });
    setValues({
      ...values,
      errorCount: countErrors(values.errors)
    });
  }

  useEffect(() => {
    setValues({
      ...values,
      errorCount: countErrors(values.errors),
      errorCountPassword: countErrors(passErrors.password),
    });
  }, [passErrors.password])
  console.log(passErrors.password.lowercase)
  return (
    <FormBackgroundWrapper>
      <FormWrapper>
        <FormValue onSubmit={handleSubmit}>
          {INPUT_PROPS.map(input => (
            <InputComponents
              values={values}
              key={input.id}
              title={input.title}
              icon={input.icon}
              successIcon={input.success}
              errorIcon={input.error}
              eyeOpenIcon={input.eyeOpen}
              doneGray={input.doneGray}
              text={input.text}
              type={input.type}
              titleFor={input.titleFor}
              name={input.name}
              handleUserInput={handleUserInput}
              errorMessage={getErrorMessage(values.errors, input.name)}
              handleChangePass={handleChangePass}
              passErrorObj={passErrors.password}
            />
          ))}
          <PasswordRulesListStyled>
            <PasswordRulesListItemStyled success={passErrors.password.lowercase}>
              One lowercase character
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled success={passErrors.password.number}>
              One number
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled success={passErrors.password.uppercase}>
              One Uppercase character
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled success={passErrors.password.eight}>
              At least 8 symbols
            </PasswordRulesListItemStyled>
          </PasswordRulesListStyled>
          <FormButtonStyled 
            type='submit'
            valid={values.formValid && isEmpty(passErrors.password)}
            disabled={!values.formValid}
          >
            Create Account
          </FormButtonStyled>
          <FormLineStyled>
            <FormOrStyled>
              or
            </FormOrStyled>
          </FormLineStyled>
          <FormWrapperGoogleButtonStyled>
            <FormButtonGoogleStyled>
              Sign up with Google
            </FormButtonGoogleStyled>
            <FormGoogleLogoStyled />
          </FormWrapperGoogleButtonStyled>
          <FormDivPolicyStyled>
            By continuing, you’re agreeing to our <PolicyStyled>Terms of Service</PolicyStyled>,
            <PolicyStyled> Privacy Policy</PolicyStyled> and <PolicyStyled>Cookie Policy</PolicyStyled>
          </FormDivPolicyStyled>
        </FormValue>
      </FormWrapper>
      <FormFooterStyled>
        <PolicyStyled>Cookie Policy</PolicyStyled>,  
        <PolicyStyled> Privacy Policy</PolicyStyled> and  
        <PolicyStyled> Terms of Service</PolicyStyled>.
      </FormFooterStyled>
    </FormBackgroundWrapper>
  )
}

export default Form;
