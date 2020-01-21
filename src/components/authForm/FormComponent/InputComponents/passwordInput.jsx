import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash';

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
  name,
  handleChangePass,
  passErrors,
  passErrorObj
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
        onChange={handleChangePass}
        name={name}
        success={isEmpty(passErrorObj)}
        error={passErrors}
      />
      <PasswordEyeIconStyledWrapper onClick={handlePasswordVisible}>
        {isPasswordShow ? <EyeOpenIcon /> : <Icon />}
      </PasswordEyeIconStyledWrapper>
      {isEmpty(passErrorObj)  ? (
          <SuccessIcon />
        ):(
          (passErrors ? (
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
  handleChangePass: PropTypes.func,
  passErrors: PropTypes.any,
  passErrorObj: PropTypes.object
};

export default PasswordInput
