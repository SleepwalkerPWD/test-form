import React, { useMemo, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useDispatch } from 'react-redux'

import { valuesToServer } from '../../../../store/actions/valuesToServer'
import countErrors from '../../utils/countErrors'
import validateForm from '../../utils/validateForm'
import getErrorMessage from '../../utils/getErrorMessage'
import validPassword from '../../utils/validPassword'
import usePasswordForm from './../../Hooks/usePasswordForm'
import useAllInput from '../../Hooks/useAllInput'
import { INPUT_PROPS } from '../../constants'
import { Buttons, Footer, Policy } from './components'
import InputComponents from './components/InputComponents/InputComponents'

import * as S from './Form.styles'

// Кастомная форма
const Form = () => {
  const dispatch = useDispatch()

  const { passValues, passErrors, handleChangePass } = usePasswordForm(
    validPassword
  )

  const {
    handleUserInput,
    values,
    setValues,
    inputValidToServer,
  } = useAllInput()

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(
      valuesToServer({
        ...inputValidToServer,
        ...passValues,
      })
    )

    setValues({
      ...values,
      errorCount: countErrors(values.errors),
      formValid: validateForm(values.errors),
    })
  }

  useEffect(() => {
    setValues({
      ...values,
      errorCount: countErrors(values.errors),
      errorCountPassword: countErrors(passErrors.password),
    })
  }, [passErrors.password])

  const isValid = useMemo(() => {
    return values.formValid && isEmpty(passErrors.password)
  }, [values.formValid, passErrors.password])

  return (
    <S.FormBackgroundWrapper>
      <S.FormWrapper>
        <S.FormValue onSubmit={handleSubmit}>
          {INPUT_PROPS.map(input => (
            <InputComponents
              values={values}
              inputValidToServer={inputValidToServer}
              key={input.id}
              title={input.title}
              icon={input.icon}
              successIcon={input.success}
              errorIcon={input.error}
              eyeOpenIcon={input.eyeOpen}
              doneGray={input.doneGray}
              text={input.text}
              type={input.type}
              titleFor={input.titleFor}
              name={input.name}
              handleUserInput={handleUserInput}
              errorMessage={getErrorMessage(values.errors, input.name)}
              handleChangePass={handleChangePass}
              passErrorObj={passErrors.password}
            />
          ))}
          <Buttons isValid={isValid} />
          <Policy />
        </S.FormValue>
      </S.FormWrapper>
      <Footer />
    </S.FormBackgroundWrapper>
  )
}

export default Form
