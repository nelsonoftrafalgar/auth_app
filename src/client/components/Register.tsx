import Form from './Form'
import React from 'react'
import { useFormState } from '../helpers/useFormState'

const Register = ({history}: any) => {
  const url = 'http://localhost:4000/register'
  const {error, handleEmail, handlePassword, handleSubmit} = useFormState(history, url)

  return (
    <Form
      error={error}
      type='Register'
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleSubmit={handleSubmit}
    />
  )
}

export default Register
