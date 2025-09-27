import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as S from './CommonPassFormRules.styles'

const CommonPassFormRules = memo(props => {
  const { title, error, empty } = props

  return (
    <S.PasswordRulesListItemStyled error={error} empty={empty}>
      {title}
    </S.PasswordRulesListItemStyled>
  )
})

CommonPassFormRules.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  empty: PropTypes.string,
}

export default CommonPassFormRules
