import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

import countErrors from '../utils/countErrors';
import validateForm from '../utils/validateForm';
import getErrorMessage from '../utils/getErrorMessage';
import validPassword from '../utils/validPassword';

import InputComponents from './InputComponents';
import usePasswordForm from '../../../Hooks/usePasswordForm';
import useAllInput from '../../../Hooks/useAllInput';

import { 
  INPUT_PROPS,
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

  const {
    passValues,
    passErrors,
    handleChangePass
  } = usePasswordForm(validPassword);

  const {
    handleUserInput,
    values,
    setValues
  } = useAllInput();


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Valid!!!!!', values)

    setValues({
      ...values,
      errorCount: countErrors(values.errors),
      formValid: validateForm(values.errors)
    });
  }

  useEffect(() => {
    setValues({
      ...values,
      ...passValues,
      errorCount: countErrors(values.errors),
      errorCountPassword: countErrors(passErrors.password),
    });
  }, [passErrors.password])

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
            <PasswordRulesListItemStyled 
              success={passErrors.password.lowercase}
              error={passErrors.password.lowercase === ''}
            >
              One lowercase character
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled 
              success={passErrors.password.number}
              error={passErrors.password.number === ''}
            >
              One number
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled 
              success={passErrors.password.uppercase} 
              error={passErrors.password.uppercase === ''}
            >
              One Uppercase character
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled 
              success={passErrors.password.eight}
              error={passErrors.password.eight === ''}
            >
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
