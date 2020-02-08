import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { Context } from '../context'

const neuMorph = () => css`
  background: #e0e5ec;
  border-radius: 5px;
  box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
`

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e0e5ec;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  padding: 15px;
  ${neuMorph}
  margin-bottom: 30px;
  color: #787f8a;
`

const Button = styled.button`
  font-size: 20px;
  padding: 15px 30px;
  color: #787f8a;
  ${neuMorph}
  margin: auto auto 0;
  cursor: pointer;
`

const Form = styled.form`
  padding: 30px;
  width: 300px;
  height: 300px;
  ${neuMorph}
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Login = () => {
  const {handleEmail, handlePassword, handleSubmit} = useContext(Context)

  return (
    <Container>
      <Form noValidate={true} onSubmit={handleSubmit}>
        <Input onChange={handleEmail} type='email' placeholder='email'/>
        <Input onChange={handlePassword} type='password' placeholder='password'/>
        <Button type='submit'>Login</Button>
      </Form>
    </Container>
  )
}

export default Login
