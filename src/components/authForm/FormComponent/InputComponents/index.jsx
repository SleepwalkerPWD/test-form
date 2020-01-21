import React from 'react'
import PropTypes from 'prop-types'

import PasswordInput from './passwordInput';
import SelectCountryInput from './selectCountryInput';
import UserNameEmailInput from './userNameEmailInput';

import {
  InputWrapperStyled,
  InputErrorStyled
} from './styled';

const InputComponents = ({
  values,
  title,
  icon: Icon,
  successIcon: SuccessIcon,
  errorIcon: ErrorIcon,
  eyeOpenIcon: EyeOpenIcon,
  doneGray: DoneGrayIcon,
  text,
  type,
  titleFor,
  handleUserInput,
  name,
  errorMessage,
  handleChangePass,
  passErrorObj
}) => {
  return (
    <>
      {title === 'Name' && (
        <InputWrapperStyled>
          <UserNameEmailInput 
            title={title}
            icon={Icon}
            successIcon={SuccessIcon}
            errorIcon={ErrorIcon}
            eyeOpenIcon={EyeOpenIcon}
            text={text}
            type={type}
            titleFor={titleFor}
            name={name}
            handleUserInput={handleUserInput}
            errorMessage={errorMessage}
          />
        {values.errorCount > 0 && (
          <InputErrorStyled>
            {errorMessage}
          </InputErrorStyled>
        )}
        </InputWrapperStyled>
      )}
      {title === 'Email' && (
        <InputWrapperStyled>
          <UserNameEmailInput 
            title={title}
            icon={Icon}
            successIcon={SuccessIcon}
            errorIcon={ErrorIcon}
            eyeOpenIcon={EyeOpenIcon}
            text={text}
            type={type}
            titleFor={titleFor}
            name={name}
            handleUserInput={handleUserInput}
            errorMessage={errorMessage}
          />
        {values.errorCount > 0 && (
          <InputErrorStyled>
            {errorMessage}
          </InputErrorStyled>
        )}
        </InputWrapperStyled>
      )}
      {title === 'Country' && (
        <InputWrapperStyled>
          <SelectCountryInput 
            title={title}
            text={text}
            titleFor={titleFor}
            name={name}
            handleUserInput={handleUserInput}
            errorMessage={errorMessage}
          />
          {values.errorCount > 0 && (
            <InputErrorStyled >
              {errorMessage}
            </InputErrorStyled>
          )}
        </InputWrapperStyled>
      )} 
      {title === 'Password' && (
        <InputWrapperStyled>
          <PasswordInput 
            title={title}
            icon={Icon}
            successIcon={SuccessIcon}
            errorIcon={ErrorIcon}
            eyeOpenIcon={EyeOpenIcon}
            doneGrayIcon={DoneGrayIcon}
            text={text}
            type={type}
            titleFor={titleFor}
            name={name}
            handleUserInput={handleUserInput}
            errorMessage={errorMessage}
            handleChangePass={handleChangePass}
            passErrors={values.errorCountPassword}
            passErrorObj={passErrorObj}
          />
        {values.errorCount > 0 && (
          <InputErrorStyled>
            {errorMessage}
          </InputErrorStyled>
        )}
        </InputWrapperStyled>
      )}
    </>
  )
}          

InputComponents.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  eyeOpenIcon: PropTypes.object,
  successIcon: PropTypes.object,
  errorIcon: PropTypes.object,
  doneGray: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.any,
  titleFor: PropTypes.string,
  handleUserInput: PropTypes.func,
  name: PropTypes.string,
  values: PropTypes.object,
  objectErrorKey: PropTypes.string,
  errorMessage: PropTypes.string,
  handleChangePass: PropTypes.func,
  passErrorObj: PropTypes.object
};

export default InputComponents;
