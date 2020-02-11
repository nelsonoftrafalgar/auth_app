import React, { useState } from 'react'

import { AxiosResponse } from 'axios'
import { Context } from './context'
import Form from './components/Form'
import { IFormError } from './types'
import { createGlobalStyle } from 'styled-components'
import { sendRequest } from './helpers/sendRequest'
import { validateInputs } from './helpers/validateInputs'

const StyleReset = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}`

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<IFormError>({email: '', password: ''})

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget
    setError({email: '', password: ''})
    setEmail(value)
  }

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget
    setError({email: '', password: ''})
    setPassword(value)
  }

  const handleLoginError = (response: AxiosResponse) => {
    const {status, data: {msg}} = response
      if (status === 409) {
        setError({email: msg, password: msg})
      }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const {isEmailValid, isPasswordValid} = validateInputs(email, password)

    if (!isEmailValid || !isPasswordValid) {
      setError({
        password: isPasswordValid ? '' : 'invalid password',
        email: isEmailValid ? '' : 'invalid email'
      })
      return
    }

    const url = 'http://localhost:4000/register'
    const requestBody = {
      email,
      password
    }
    sendRequest(url, requestBody, handleLoginError)
  }

  const contextValue = {
    handleEmail,
    handlePassword,
    handleSubmit,
    error
  }

  return (
    <Context.Provider value={contextValue}>
      <StyleReset/>
      <Form/>
    </Context.Provider>
  )
}

export default App
