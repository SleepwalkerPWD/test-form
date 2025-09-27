import { useCallback, useState } from 'react'

import { INITIAL_PASS_ERRORS } from '../../Form/constants/inititalPassErrors'

// Отлов ошибок в пароле
const usePasswordForm = validate => {
  const [passValues, setPassValues] = useState({})
  const [passErrors, setPassErrors] = useState(INITIAL_PASS_ERRORS)

  const handleChangePass = useCallback(
    event => {
      event.persist()
      const { value } = event.target

      setPassValues(values => ({
        ...values,
        [event.target.name]: event.target.value,
      }))
      setPassErrors(validate(value))
    },
    [validate]
  )

  return {
    handleChangePass,
    passValues,
    passErrors,
  }
}

export default usePasswordForm
