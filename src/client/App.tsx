import React, { useState } from 'react'

import { Context } from './context'
import Login from './components/Login'
import { createGlobalStyle } from 'styled-components'

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

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget
    setEmail(value)
  }

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget
    setPassword(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  const contextValue = {
    handleEmail,
    handlePassword,
    handleSubmit
  }

  return (
    <Context.Provider value={contextValue}>
      <StyleReset/>
      <Login/>
    </Context.Provider>
  )
}

export default App
