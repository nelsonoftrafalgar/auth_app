import Form from './Form'
import React from 'react'
import { useFormState } from '../helpers/useFormState'

const Login = ({history}: any) => {
  const url = 'http://localhost:4000/login'
  const {error, handleEmail, handlePassword, handleSubmit} = useFormState(history, url)

  return (
    <Form
      error={error}
      type='Login'
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleSubmit={handleSubmit}
    />
  )
}

export default Login
