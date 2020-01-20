import styled from "styled-components";
import backgroundImage from '../../images/signUp.svg';

const LogoBackgroundWrapper = styled.div`
  display: flex;
  width: 36%;
  height: 92%;
  flex-direction: column;
`;

const BackgroundStyled = styled.svg`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-color: #F5FDFF;
  background-position: 22%;
  background-position-y: 53%;
  background-repeat: no-repeat;
`;

const HeadingStyled = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: -0.015em;
  color: #022831;
  margin-bottom: 0;
`;

const SectionTextStyled = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  color: #022831;
  margin-top: 5px;
`;

const SectionLogInStyled = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  color: #809398;
`;

const SectionFooterTesxtStyled = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  margin-top: 124px;
  color: #809398;
`;

const LinkStyled = styled.a`
  cursor: pointer;
  color: #156EF4;

  &:hover {
    color: #003CB9;
  }
`;

export {
  BackgroundStyled,
  LogoBackgroundWrapper,
  HeadingStyled,
  SectionTextStyled,
  SectionLogInStyled,
  SectionFooterTesxtStyled,
  LinkStyled
};