import styled from 'styled-components'
import { GoogleIcon } from '../../../../icons'

const FormLineStyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5em;
    border-top: 1px solid #cddee1;
  }
`

const FormOrStyled = styled.span`
  background-color: white;
  width: 100px;
  z-index: 1;
  text-align: center;
`
const FormButtonStyled = styled.button`
  height: 50px;
  width: 100%;
  border: none;
  background-color: ${prop => (prop.isValid ? '#05596B' : '#E6EEF0')};
  border-radius: 4px;
  cursor: ${prop => (prop.isValid ? 'pointer' : 'auto')};
  color: ${prop => (prop.isValid ? '#FFFFFF' : '#CCD4D6')};
  margin-top: 20px;
  outline: none;
  pointer-events: ${prop => (prop.pointerEvent ? 'auto' : 'none')};

  &:hover {
    background-color: ${prop => prop.isValid && '#09A2C3'};
  }
`

const FormWrapperGoogleButtonStyled = styled.div`
  position: relative;
`

const FormGoogleLogoStyled = styled(GoogleIcon)`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
`

const FormButtonGoogleStyled = styled.a`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  padding: 16px;
  background-color: #e6eef0;
  border-radius: 4px;
  cursor: pointer;
  color: #022831;
  margin-top: 20px;

  &:hover {
    background-color: #cddee1;
  }
`

export {
  FormButtonStyled,
  FormButtonGoogleStyled,
  FormWrapperGoogleButtonStyled,
  FormGoogleLogoStyled,
  FormLineStyled,
  FormOrStyled,
}
