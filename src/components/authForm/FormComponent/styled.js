import styled, { css } from 'styled-components';

import UserIcon from '../../icons/UserIcon';
import MailIcon from '../../icons/MailIcon';
import DownIcon from '../../icons/DownIcon';
import EyeIcon from '../../icons/EyeIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import DoneIcon from '../../icons/DoneIcon';
import ErrorIcon from '../../icons/ErrorIcon';
import EyeClosedIcon from '../../icons/EyeClosedIcon';
import DoneGrayIcon from '../../icons/DoneGrayIcon';

import CircleIcon from '../../images/icons/PasswordValidation/CircleIcon.svg';
import CheckIcon from '../../images/icons/PasswordValidation/CheckIcon.svg';
import FailIcon from '../../images/icons/PasswordValidation/FailIcon.svg';

const complexMixinError = css`
  color: ${prop => (prop.error ? '#809398' : '#0AD65C')};
`;

const complexMixinErrorIcon = css`
  content: ${prop => (prop.error ? `url(${CircleIcon})` : `url(${CheckIcon})`)}
`;

const FormBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FormValue = styled.form`
  width: 413px;
  height: 715px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(2, 40, 49, 0.08), 0px 0px 2px rgba(2, 40, 49, 0.1);
  border-radius: 6px;
  padding: 20px;
`;

const UserIconStyled = styled(UserIcon)`
  position: absolute;
  right: 15px;
  bottom: 18px;
`;

const MailIconStyled = styled(MailIcon)`
  position: absolute;
  right: 15px;
  bottom: 18px;
`;

const DownIconStyled = styled(DownIcon)`
  position: absolute;
  right: 15px;
  bottom: 18px;
  cursor: pointer;
`;

const EyeIconStyled = styled(EyeIcon)`
  position: absolute;
  right: 15px;
  bottom: 19px;
  cursor: pointer;
`;

const EyeClosedIconStyled = styled(EyeClosedIcon)`
  position: absolute;
  right: 15px;
  bottom: 17px;
  cursor: pointer;
`;

const DoneIconStyled = styled(DoneIcon)`
  position: absolute;
  right: 15px;
  bottom: 17px;
  cursor: pointer;
`;

const ErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  right: 15px;
  bottom: 15px;
  cursor: pointer;
`;

const DoneGrayIconStyled = styled(DoneGrayIcon)`
  position: absolute;
  right: 15px;
  bottom: 17px;
`;

const PasswordRulesListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  margin: 0;
  margin-left: 18px;
  margin-right: 80px;
  padding: 0;

  li:nth-child(2) {
    margin-right: 35px;
  }
`;

const PasswordRulesListItemStyled = styled.li`
  position: relative;
  ${prop => (prop.success ? 'color: #F43015' : complexMixinError)};
  margin-top: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  list-style-type: none;

  &::before {
    ${prop => (prop.success ? `content: url(${FailIcon})` : complexMixinErrorIcon)};
    position: absolute;
    bottom: 10px;
    left: -15px;
    height: 0.5em;
  }
`;

const FormButtonStyled = styled.button`
  height: 50px;
  width: 100%;
  border: none;
  background-color: ${prop => (prop.valid ? '#05596B' : '#E6EEF0')}; 
  border-radius: 4px;
  cursor: ${prop => (prop.valid ? 'pointer' : 'auto')};
  color: ${prop => (prop.valid ? '#FFFFFF' : '#CCD4D6')};
  margin-top: 20px;
  outline: none;

  &:hover {
    background-color: ${prop => (prop.valid && '#09A2C3')};
  }
`;

const FormLineStyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 15px;

  &::after {
    content:"";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5em;
    border-top: 1px solid #CDDEE1;
  }
`;

const FormOrStyled = styled.span`
  background-color: white;
  width: 100px;
  z-index: 1;
  text-align: center;
`;

const FormWrapperGoogleButtonStyled = styled.div`
  position: relative;
`;

const FormButtonGoogleStyled = styled.a`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  padding: 16px;
  background-color: #E6EEF0;
  border-radius: 4px;
  cursor: pointer;
  color: #022831;
  margin-top: 20px;

  &:hover {
    background-color: #CDDEE1;
  }
`;

const FormGoogleLogoStyled = styled(GoogleIcon)`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
`;

const FormDivPolicyStyled = styled.div`
  margin-top: 30px;
`;

const PolicyStyled = styled.a`
  color: #156EF4;
  cursor: pointer;

  &:hover {
    color: #003CB9;
  }
`;

const FormFooterStyled = styled.div`
  font-size: 14px;
  line-height: 150%;
  color: #809398;
  margin-top: 82px;
`;

export {
  FormWrapper,
  FormValue,
  UserIconStyled,
  MailIconStyled,
  DownIconStyled,
  EyeIconStyled,
  EyeClosedIconStyled,
  DoneIconStyled,
  ErrorIconStyled,
  DoneGrayIconStyled,
  PasswordRulesListStyled,
  PasswordRulesListItemStyled,
  FormButtonStyled,
  FormButtonGoogleStyled,
  FormWrapperGoogleButtonStyled,
  FormGoogleLogoStyled,
  FormDivPolicyStyled,
  PolicyStyled,
  FormLineStyled,
  FormOrStyled,
  FormBackgroundWrapper,
  FormFooterStyled
};