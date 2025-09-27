import React from 'react'
import PropTypes from 'prop-types'

import * as S from './Buttons.styles'

// Кнопки
const Buttons = props => {
  const { isValid } = props
  return (
    <>
      <S.FormButtonStyled
        type="submit"
        isValid={isValid}
        pointerEvent={isValid}
      >
        Create Account
      </S.FormButtonStyled>
      <S.FormLineStyled>
        <S.FormOrStyled>or</S.FormOrStyled>
      </S.FormLineStyled>
      <S.FormWrapperGoogleButtonStyled>
        <S.FormButtonGoogleStyled>Sign up with Google</S.FormButtonGoogleStyled>
        <S.FormGoogleLogoStyled />
      </S.FormWrapperGoogleButtonStyled>
    </>
  )
}

Buttons.propTypes = {
  isValid: PropTypes.boolean,
}

export default Buttons
