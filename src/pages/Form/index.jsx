import React from 'react'

import { LogoComponent } from './components/LogoComponent'
import { Form } from './components/FormComponent'
import { AuthFormBackground } from './styled'

const AuthForm = () => {
  return (
    <>
      <AuthFormBackground>
        <LogoComponent />
        <Form />
      </AuthFormBackground>
    </>
  )
}

export default AuthForm
