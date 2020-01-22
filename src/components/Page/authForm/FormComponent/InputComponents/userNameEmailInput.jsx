import React from 'react'
import PropTypes from 'prop-types'

import {
  InputStyled,
  TitleFormStyled,
} from './styled';

const UserNameEmailInput = ({
  title,
  icon: Icon,
  successIcon: SuccessIcon,
  errorIcon: ErrorIcon,
  text,
  type,
  titleFor,
  handleUserInput,
  name,
  errorMessage
}) => {

  return (
    <>
      <TitleFormStyled htmlFor={titleFor}>{title}</TitleFormStyled>
      <InputStyled 
        type={type}
        placeholder={text}
        onChange={handleUserInput}
        name={name}
        success={!errorMessage}
        error={errorMessage !== ' '}
      />
      {!errorMessage ? (
          <SuccessIcon /> 
        ):(
          (errorMessage !== ' ' ? (
              <ErrorIcon />
            ) : (
              <Icon />
            )
          )
        )
      }
    </>
  )
}

UserNameEmailInput.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  eyeOpenIcon: PropTypes.object,
  successIcon: PropTypes.object,
  errorIcon: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.any,
  titleFor: PropTypes.string,
  handleUserInput: PropTypes.func,
  name: PropTypes.string,
  values: PropTypes.object,
  errorMessage: PropTypes.string
};

export default UserNameEmailInput;
