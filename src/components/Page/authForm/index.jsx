import React from 'react';

import LogoComponent from './LogoComponent/LogoComponent';
import { Form } from './FormComponent';

import { AuthFormBackground } from './styled';

const AuthForm = () => {
  return (
    <>
      <AuthFormBackground >
        <LogoComponent />
        <Form />
      </AuthFormBackground>
    </>
  )
}

export default AuthForm;