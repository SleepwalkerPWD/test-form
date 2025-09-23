import { useState } from 'react'

import { INITIAL_VALUES, VALID_EMAIL_REGEXP } from '../../Form/constants'

import countErrors from '../../Form/utils/countErrors'
import validateForm from '../../Form/utils/validateForm'

// Values и валидация
const useAllInput = () => {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [inputValidToServer, setInputValidToServer] = useState({})

  const handleUserInput = event => {
    event.preventDefault()
    const { name, value } = event.target
    let errors = values.errors

    switch (name) {
      case 'userName':
        errors.userName = value.length < 5 ? 'Name at least 5 symbols' : ''
        break
      case 'country':
        errors.country = !value.length ? 'Choose country' : ''
        break
      case 'email':
        errors.email = VALID_EMAIL_REGEXP.test(value) ? '' : 'Invalid email'
        break
      default:
        break
    }

    setValues({
      ...values,
      formValid: validateForm(values.errors),
      errors,
      errorCount: countErrors(values.errors),
    })

    setInputValidToServer({
      ...inputValidToServer,
      [name]: value,
    })
  }

  return {
    handleUserInput,
    values,
    setValues,
    inputValidToServer,
  }
}

export default useAllInput
