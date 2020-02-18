import Form from './Form'
import Nav from './Nav'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { loginUrl } from '../endpoints'
import { useFormState } from '../helpers/useFormState'

const Login = (props: RouteComponentProps) => {
  const {error, handleEmail, handlePassword, handleSubmit} = useFormState(props.history, loginUrl)

  const nav = <Nav {...props}/>

  return (
    <Form
      nav={nav}
      error={error}
      type='Login'
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleSubmit={handleSubmit}
    />
  )
}

export default Login
