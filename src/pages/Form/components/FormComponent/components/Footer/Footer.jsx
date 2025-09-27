import React from 'react'

import { PolicyStyled } from '../../Form.styles'
import * as S from './Footer.styles'

const Footer = () => {
  return (
    <S.FormFooterStyled>
      <PolicyStyled>Cookie Policy</PolicyStyled>,
      <PolicyStyled> Privacy Policy</PolicyStyled> and
      <PolicyStyled> Terms of Service</PolicyStyled>.
    </S.FormFooterStyled>
  )
}

export default Footer
