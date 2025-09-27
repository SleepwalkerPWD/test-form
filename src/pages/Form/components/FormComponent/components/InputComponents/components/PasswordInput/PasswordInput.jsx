import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import {
  InputStyled,
  PasswordEyeIconStyledWrapper,
  TitleFormStyled,
} from '../../InputComponents.styles'

const PasswordInput = memo(props => {
  const {
    title,
    icon: Icon,
    successIcon: SuccessIcon,
    errorIcon: ErrorIcon,
    eyeOpenIcon: EyeOpenIcon,
    doneGrayIcon: DoneGrayIcon,
    text,
    type,
    titleFor,
    name,
    handleChangePass,
    passErrors,
    passErrorObj,
  } = props
  const [isPasswordShow, setIsPasswordShow] = useState(false)

  const handlePasswordVisible = () => {
    setIsPasswordShow(!isPasswordShow)
  }

  return (
    <>
      <TitleFormStyled htmlFor={titleFor}>{title}</TitleFormStyled>
      <InputStyled
        type={isPasswordShow ? 'text' : `${type}`}
        placeholder={text}
        onChange={event => handleChangePass(event)}
        name={name}
        success={isEmpty(passErrorObj)}
        error={passErrors}
      />
      <PasswordEyeIconStyledWrapper onClick={handlePasswordVisible}>
        {isPasswordShow ? <EyeOpenIcon /> : <Icon />}
      </PasswordEyeIconStyledWrapper>
      {isEmpty(passErrorObj) ? (
        <SuccessIcon />
      ) : passErrors ? (
        <ErrorIcon />
      ) : (
        <DoneGrayIcon />
      )}
    </>
  )
})

PasswordInput.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  eyeOpenIcon: PropTypes.object,
  successIcon: PropTypes.object,
  errorIcon: PropTypes.object,
  doneGrayIcon: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.any,
  titleFor: PropTypes.string,
  name: PropTypes.string,
  values: PropTypes.object,
  handleChangePass: PropTypes.func,
  passErrors: PropTypes.any,
  passErrorObj: PropTypes.object,
}

export default PasswordInput
