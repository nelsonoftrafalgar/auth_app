import Form from './Form'
import Nav from './Nav'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { registerUrl } from '../endpoints'
import { useFormState } from '../helpers/useFormState'

const Register = (props: RouteComponentProps) => {
  const {error, handleEmail, handlePassword, handleSubmit} = useFormState(props.history, registerUrl)

  const nav = <Nav {...props}/>

  return (
    <Form
      nav={nav}
      error={error}
      type='Register'
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleSubmit={handleSubmit}
    />
  )
}

export default Register
