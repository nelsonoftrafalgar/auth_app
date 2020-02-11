import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { Context } from '../context'

const neuMorphOuter = () => css`
  background: #e0e5ec;
  border-radius: 5px;
  box-shadow: 8px 8px 12px rgb(163,177,198,0.6), -8px -8px 12px rgba(255,255,255, 0.5);
`

const neuMorphInner = () => css`
  background: #e0e5ec;
  border-radius: 5px;
  box-shadow: inset -3px -3px 2px rgba(255,255,255,0.5),inset 3px 3px 2px rgb(163,177,198,0.6);
`

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e0e5ec;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input<{hasError: boolean}>`
  width: 100%;
  padding: 15px;
  ${neuMorphInner}
  color: #787f8a;
  ${({hasError}) => `border: 1px solid ${hasError ? 'red' : 'transparent'};`}
`

const Button = styled.button`
  font-size: 20px;
  padding: 15px 30px;
  color: #787f8a;
  ${neuMorphOuter}
  margin: auto auto 0;
  cursor: pointer;
`

const FormWrapper = styled.form`
  padding: 30px;
  width: 300px;
  height: 300px;
  ${neuMorphOuter}
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ErrorMessage = styled.span`
  color: red;
  font-family: sans-serif;
  height: 18px;
  margin: 5px 0 20px 0;
  width: 100%;
  font-size: 14px;
`

const Form = () => {
  const {
    handleEmail,
    handlePassword,
    handleSubmit,
    error: {email, password}
  } = useContext(Context)

  return (
    <Container>
      <FormWrapper noValidate={true} onSubmit={handleSubmit}>
        <Input hasError={!!email} onChange={handleEmail} type='email' placeholder='email'/>
        <ErrorMessage>{email}</ErrorMessage>
        <Input hasError={!!password} onChange={handlePassword} type='password' placeholder='password'/>
        <ErrorMessage>{password}</ErrorMessage>
        <Button type='submit'>Register</Button>
      </FormWrapper>
    </Container>
  )
}

export default Form
