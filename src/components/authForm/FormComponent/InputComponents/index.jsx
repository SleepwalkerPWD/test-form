import React from 'react'
import PropTypes from 'prop-types'

import { COUNTRY_ARR } from '../../constants';

import PasswordInput from './passwordInput';

import {
  InputWrapperStyled,
  InputStyled,
  TitleFormStyled,
  InputSelectStyled,
  InputOptionStyled,
  InputErrorStyled
} from './styled';

const InputComponents = ({
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
  values,
  objectErrorKey,
  objectErrorValue
}) => {
  return (
    <>
      {title === 'Country' ? (
        <InputWrapperStyled>
          <TitleFormStyled>{title}</TitleFormStyled>
          <InputSelectStyled 
            success={!values.errors.country}
            error={objectErrorValue !== ' '}
            onClick={handleUserInput}
            name={name} 
            size='1'
          >
            <InputOptionStyled value="" hidden disabled selected>{text}</InputOptionStyled>
            {COUNTRY_ARR.map((country, index) => (
                <InputOptionStyled 
                  key={index}
                  value={country}
                >
                  {country}
                </InputOptionStyled>
            ))}
          </InputSelectStyled>
          {values.errorCount > 0 && (
            <InputErrorStyled className='error'>{values.errors.country}</InputErrorStyled>
          )}
        </InputWrapperStyled>
      ) : (
          (title !== 'Password' ? (
            <InputWrapperStyled>
              <TitleFormStyled htmlFor={titleFor}>{title}</TitleFormStyled>
              <InputStyled 
                type={type}
                placeholder={text}
                onChange={handleUserInput}
                name={name}
                success={!objectErrorValue}
                error={objectErrorValue !== ' '}
              />
              {!objectErrorValue ? (
                  <SuccessIcon /> 
                ):(
                  (objectErrorValue !== ' ' ? (
                      <ErrorIcon />
                    ) : (
                      <Icon />
                    )
                  )
                )
              }
            {name === objectErrorKey && values.errorCount > 0 && (
              <InputErrorStyled>
                {objectErrorValue}
              </InputErrorStyled>
            )}
              </InputWrapperStyled>
            ):(
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
                  objectErrorValue={objectErrorValue}
                />
              {values.errorCount > 0 && (
                <InputErrorStyled>
                  {objectErrorValue}
                </InputErrorStyled>
              )}
              </InputWrapperStyled>
            )
          )
        )
      }  
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
  objectErrorValue: PropTypes.string
};

export default InputComponents;
