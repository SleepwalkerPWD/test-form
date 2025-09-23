import React from 'react'
import LogoIcon from '../../../icons/LogoIcon'

import {
  BackgroundStyled,
  LogoBackgroundWrapper,
  HeadingStyled,
  SectionTextStyled,
  SectionLogInStyled,
  SectionFooterTesxtStyled,
  LinkStyled,
} from './LogoComponent.styled'

const LogoComponent = () => {
  return (
    <LogoBackgroundWrapper>
      <LogoIcon />
      <BackgroundStyled />
      <HeadingStyled>Create account</HeadingStyled>
      <SectionTextStyled>
        Sell goods/services and get paid in crypto or let your <br />
        followers donate you in crypto. Do it all with Yomer.
      </SectionTextStyled>
      <SectionLogInStyled>
        Already have an account? <LinkStyled>Log in</LinkStyled>
      </SectionLogInStyled>
      <SectionFooterTesxtStyled>
        ©2025 All Rights Reserved
      </SectionFooterTesxtStyled>
    </LogoBackgroundWrapper>
  )
}

export default LogoComponent
