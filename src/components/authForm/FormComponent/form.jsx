import React, { useState } from 'react';

import countErrors from '../utils/countErrors';
import validateForm from '../utils/validateForm';
import getKey from '../utils/getKey';
import getValue from '../utils/getValue';

import InputComponents from './InputComponents';

import { 
  INPUT_PROPS,
  LIST_ITEMS,
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
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Пароль должен быть больше 8 символов'
            : ''
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

  const handleSubmit = (event) => {
    event.preventDefault();

    setValues({
      ...values,
      formValid: validateForm(values.errors)
    });
    setValues({
      ...values,
      errorCount: countErrors(values.errors)
    });
  }
  return (
    <FormBackgroundWrapper>
      <FormWrapper>
        <FormValue onSubmit={handleSubmit}>
          {INPUT_PROPS.map(input => (
            <InputComponents
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
              values={values}
              objectErrorKey={getKey(values, input.name)}
              objectErrorValue={getValue(values.errors, input.name)}
            />
          ))}
          <PasswordRulesListStyled>
            {LIST_ITEMS.map((list, index) => (
              <PasswordRulesListItemStyled key={index}>
                {list}
              </PasswordRulesListItemStyled>
            ))}
          </PasswordRulesListStyled>
          <FormButtonStyled 
            type='submit'
            valid={values.formValid}
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
