import React from 'react'
import PropTypes from 'prop-types'

import { COUNTRY_ARR } from '../../constants';

import {
  TitleFormStyled,
  InputSelectStyled,
  InputOptionStyled
} from './styled';

const SelectCountryInput = ({
  title,
  text,
  titleFor,
  handleUserInput,
  name,
  errorMessage
}) => {

  return (
    <>
      <TitleFormStyled htmlFor={titleFor} >{title}</TitleFormStyled>
      <InputSelectStyled 
        success={!errorMessage}
        error={errorMessage !== ' '}
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
    </>
  )
}

SelectCountryInput.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.any,
  titleFor: PropTypes.string,
  handleUserInput: PropTypes.func,
  name: PropTypes.string,
  errorMessage: PropTypes.string
};

export default SelectCountryInput