import styled, { css } from 'styled-components';

import DownIcon from '../../../images/icons/DownIcon.svg';
import DoneIcon from '../../../images/icons/DoneIcon.svg';
import ErrorIcon from '../../../images/icons/ErrorIcon.svg';

const complexMixinError = css`
  border: ${prop => (prop.error ? '1px solid #F43015' : '1px solid #EBEEEE')};
`
const complexMixinIconError = css`
  background-image: ${prop => (prop.error ? `url(${ErrorIcon})` : `url(${DownIcon})`)};
`

const InputWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 23px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TitleFormStyled = styled.label`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #022831;
  margin-bottom: 10px;
`;



const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  background: ${prop => (prop.success ? 'white' : '#F5F6F7')};
  ${prop => (prop.success ? 'border: 1px solid #0AD65C;' : complexMixinError)};
  box-sizing: border-box;
  border-radius: 4px;
  outline:none;
  padding: 15px;
  font-size: 16px;
  line-height: 150%;
  color: ${prop => (prop.success ? '#022831' : '#4E696F')};
  cursor: pointer;

  &:hover {
    border-color: #84D0E1;
  }

  &:focus {
    background: white;
    border-color: #09A2C3;
  }
`;

const InputSelectStyled = styled.select`
  width: 100%;
  height: 50px;
  background: ${prop => (prop.success ? 'white' : '#F5F6F7')};
  ${prop => (prop.success ? 'border: 1px solid #0AD65C' : complexMixinError)};
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  line-height: 150%;
  color: ${prop => (prop.success ? '#022831' : '#4E696F')};
  cursor: pointer;
  appearance: none;
  ${prop => (prop.success ? `background-image: url(${DoneIcon})` : complexMixinIconError)};
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 96%;
  outline: 0;

  &:hover {
    border-color: #84D0E1;
  }
`;

const InputOptionStyled = styled.option`
  color: #4E696F;
  cursor: pointer;
`;

const InputErrorStyled = styled.span`
  position: absolute;
  bottom: -15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: -0.005em;
  color: #F43015;
`;

export {
  InputWrapperStyled,
  InputStyled,
  TitleFormStyled,
  InputSelectStyled,
  InputOptionStyled,
  InputErrorStyled
}