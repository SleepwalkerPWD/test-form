import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
  InputOptionStyled,
  InputSelectStyled,
  TitleFormStyled,
} from '../../InputComponents.styles'
import { COUNTRY_ARR } from '../../../../../../constants'

const SelectCountryInput = memo(props => {
  const { title, text, titleFor, handleUserInput, name, errorMessage } = props
  return (
    <>
      <TitleFormStyled htmlFor={titleFor}>{title}</TitleFormStyled>
      <InputSelectStyled
        success={!errorMessage}
        error={errorMessage !== ' '}
        onClick={event => handleUserInput(event)}
        name={name}
        size="1"
      >
        <InputOptionStyled value="" hidden disabled selected>
          {text}
        </InputOptionStyled>
        {COUNTRY_ARR.map(country => (
          <InputOptionStyled key={country} value={country}>
            {country}
          </InputOptionStyled>
        ))}
      </InputSelectStyled>
    </>
  )
})

SelectCountryInput.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.any,
  titleFor: PropTypes.string,
  handleUserInput: PropTypes.func,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
}

export default SelectCountryInput
