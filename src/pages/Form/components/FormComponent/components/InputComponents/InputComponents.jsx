import React from 'react'
import PropTypes from 'prop-types'

import { TITLE_NAME } from '../../../../constants/inputForm'

import { PasswordRulesListStyled } from '../CommonPassFormRules/CommonPassFormRules.styles'
import CommonPassFormRules from '../CommonPassFormRules/CommonPassFormRules'
import PasswordInput from './components/PasswordInput/PasswordInput'
import SelectCountryInput from './components/SelectCountryInput/SelectCountryInput'
import UserNameEmailInput from './components/UserNameEmailInput/UserNameEmailInput'
import { InputErrorStyled, InputWrapperStyled } from './InputComponents.styles'

const InputComponents = props => {
  const {
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
    passErrorObj,
  } = props

  return (
    <>
      {title === TITLE_NAME.name && (
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
            <InputErrorStyled>{errorMessage}</InputErrorStyled>
          )}
        </InputWrapperStyled>
      )}
      {title === TITLE_NAME.email && (
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
            <InputErrorStyled>{errorMessage}</InputErrorStyled>
          )}
        </InputWrapperStyled>
      )}
      {title === TITLE_NAME.country && (
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
            <InputErrorStyled>{errorMessage}</InputErrorStyled>
          )}
        </InputWrapperStyled>
      )}
      {title === TITLE_NAME.password && (
        <>
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
              errorMessage={errorMessage}
              handleChangePass={handleChangePass}
              passErrors={values.errorCountPassword}
              passErrorObj={passErrorObj}
            />
            {values.errorCount > 0 && (
              <InputErrorStyled>{errorMessage}</InputErrorStyled>
            )}
          </InputWrapperStyled>
          <PasswordRulesListStyled>
            <CommonPassFormRules
              title="One lowercase character"
              error={passErrorObj.lowercase}
              empty={passErrorObj.lowercase === ''}
            />
            <CommonPassFormRules
              title="One number"
              error={passErrorObj.number}
              empty={passErrorObj.number === ''}
            />
            <CommonPassFormRules
              title="One Uppercase character"
              error={passErrorObj.uppercase}
              empty={passErrorObj.uppercase === ''}
            />
            <CommonPassFormRules
              title="At least 8 symbols"
              error={passErrorObj.eight}
              empty={passErrorObj.eight === ''}
            />
          </PasswordRulesListStyled>
        </>
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
  passErrorObj: PropTypes.object,
}

export default InputComponents
