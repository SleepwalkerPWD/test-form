import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import { valuesToServer } from '../../../../store/actions/valuesToServer';

import countErrors from '../utils/countErrors';
import validateForm from '../utils/validateForm';
import getErrorMessage from '../utils/getErrorMessage';
import validPassword from '../utils/validPassword';

import usePasswordForm from '../../../Hooks/usePasswordForm';
import useAllInput from '../../../Hooks/useAllInput';

import InputComponents from './InputComponents';

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
  const dispatch = useDispatch()

  const {
    passValues,
    passErrors,
    handleChangePass
  } = usePasswordForm(validPassword);

  const {
    handleUserInput,
    values,
    setValues,
    inputValidToServer
  } = useAllInput();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(
      valuesToServer({
        ...inputValidToServer,
        ...passValues
      })
    )

    setValues({
      ...values,
      errorCount: countErrors(values.errors),
      formValid: validateForm(values.errors)
    });
  }

  useEffect(() => {
    setValues({
      ...values,
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
              error={passErrors.password.lowercase}
              empty={passErrors.password.lowercase === ''}
            >
              One lowercase character
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled 
              error={passErrors.password.number}
              empty={passErrors.password.number === ''}
            >
              One number
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled 
              error={passErrors.password.uppercase} 
              empty={passErrors.password.uppercase === ''}
            >
              One Uppercase character
            </PasswordRulesListItemStyled>
            <PasswordRulesListItemStyled 
              error={passErrors.password.eight}
              empty={passErrors.password.eight === ''}
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
