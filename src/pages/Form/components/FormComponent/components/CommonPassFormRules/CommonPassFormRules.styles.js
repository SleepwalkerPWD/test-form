import styled, { css } from 'styled-components'

import CircleIcon from '../../../../images/icons/PasswordValidation/CircleIcon.svg'
import CheckIcon from '../../../../images/icons/PasswordValidation/CheckIcon.svg'
import FailIcon from '../../../../images/icons/PasswordValidation/FailIcon.svg'

const complexMixinError = css`
  color: ${prop => (prop.error ? '#F43015' : '#0AD65C')};
`

const complexMixinErrorIcon = css`
  content: ${prop => (prop.error ? `url(${FailIcon})` : `url(${CheckIcon})`)};
`

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
`

const PasswordRulesListItemStyled = styled.li`
  position: relative;
  ${prop => (prop.empty ? 'color: #809398' : complexMixinError)};
  margin-top: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  list-style-type: none;

  &::before {
    ${prop =>
      prop.empty ? `content: url(${CircleIcon})` : complexMixinErrorIcon};
    position: absolute;
    bottom: 10px;
    left: -15px;
    height: 0.5em;
  }
`

export { PasswordRulesListStyled, PasswordRulesListItemStyled }
