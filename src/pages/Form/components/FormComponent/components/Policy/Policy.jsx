import React from 'react'

import { PolicyStyled } from '../../Form.styles'
import * as S from './Policy.styles'

const Policy = () => {
  return (
    <S.FormDivPolicyStyled>
      By continuing, you’re agreeing to our{' '}
      <PolicyStyled>Terms of Service</PolicyStyled>,
      <PolicyStyled> Privacy Policy</PolicyStyled> and{' '}
      <PolicyStyled>Cookie Policy</PolicyStyled>
    </S.FormDivPolicyStyled>
  )
}

export default Policy
