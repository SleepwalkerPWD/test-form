import styled from 'styled-components'

import {
  UserIcon,
  MailIcon,
  DownIcon,
  EyeIcon,
  DoneIcon,
  ErrorIcon,
  EyeClosedIcon,
  DoneGrayIcon,
} from '../../icons/'

const FormBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const FormValue = styled.form`
  width: 413px;
  height: 715px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(2, 40, 49, 0.08),
    0px 0px 2px rgba(2, 40, 49, 0.1);
  border-radius: 6px;
  padding: 20px;
`

const UserIconStyled = styled(UserIcon)`
  position: absolute;
  right: 15px;
  bottom: 18px;
`

const MailIconStyled = styled(MailIcon)`
  position: absolute;
  right: 15px;
  bottom: 18px;
`

const DownIconStyled = styled(DownIcon)`
  position: absolute;
  right: 15px;
  bottom: 18px;
  cursor: pointer;
`

const EyeIconStyled = styled(EyeIcon)`
  position: absolute;
  right: 15px;
  bottom: 19px;
  cursor: pointer;
`

const EyeClosedIconStyled = styled(EyeClosedIcon)`
  position: absolute;
  right: 15px;
  bottom: 17px;
  cursor: pointer;
`

const DoneIconStyled = styled(DoneIcon)`
  position: absolute;
  right: 15px;
  bottom: 17px;
  cursor: pointer;
`

const ErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  right: 15px;
  bottom: 15px;
  cursor: pointer;
`

const DoneGrayIconStyled = styled(DoneGrayIcon)`
  position: absolute;
  right: 15px;
  bottom: 17px;
`

const PolicyStyled = styled.a`
  color: #156ef4;
  cursor: pointer;

  &:hover {
    color: #003cb9;
  }
`

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
  PolicyStyled,
  FormBackgroundWrapper,
}
