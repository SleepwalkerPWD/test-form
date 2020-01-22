import React from 'react';
// import PropTypes from 'prop-types';

import LogoIcon from "../../../icons/LogoIcon";

import { 
  BackgroundStyled,
  LogoBackgroundWrapper,
  HeadingStyled,
  SectionTextStyled,
  SectionLogInStyled,
  SectionFooterTesxtStyled,
  LinkStyled
} from './styled';

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
        ©2019 All Rights Reserved. Yomer OÜ
      </SectionFooterTesxtStyled>
    </LogoBackgroundWrapper>
  )
}

export default LogoComponent;