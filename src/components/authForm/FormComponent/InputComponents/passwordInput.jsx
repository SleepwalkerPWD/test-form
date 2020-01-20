import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  InputStyled,
  TitleFormStyled,
  PasswordEyeIconStyledWrapper,
} from './styled';

const PasswordInput = ({
  title,
  icon: Icon,
  successIcon: SuccessIcon,
  errorIcon: ErrorIcon,
  eyeOpenIcon: EyeOpenIcon,
  doneGrayIcon: DoneGrayIcon,
  text,
  type,
  titleFor,
  handleUserInput,
  name,
  objectErrorValue
}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handlePasswordVisible = () => {
    setIsPasswordShow(!isPasswordShow);
  }

  return (
    <>
      <TitleFormStyled htmlFor={titleFor}>{title}</TitleFormStyled>
      <InputStyled 
        type={isPasswordShow ? 'text' : `${type}`}
        placeholder={text}
        onChange={handleUserInput}
        name={name}
        success={!objectErrorValue}
        error={objectErrorValue !== ' '}
      />
      <PasswordEyeIconStyledWrapper onClick={handlePasswordVisible}>
        {isPasswordShow ? <EyeOpenIcon /> : <Icon />}
      </PasswordEyeIconStyledWrapper>
      {!objectErrorValue && objectErrorValue !== ' ' ? (
          <SuccessIcon /> 
        ):(
          (objectErrorValue !== ' ' ? (
              <ErrorIcon />
            ) : (
              <DoneGrayIcon />
            )
          )
        )
      }
    </>
  )
}

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
  handleUserInput: PropTypes.func,
  name: PropTypes.string,
  values: PropTypes.object,
  objectErrorKey: PropTypes.string,
  objectErrorValue: PropTypes.string
};

export default PasswordInput
