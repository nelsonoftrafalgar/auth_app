import { Button, ErrorMessage, FormContainer, FormWrapper, Input } from '../styles'

import { IFormError } from '../types'
import React from 'react'

interface IFormProps {
  handleEmail: (e: React.FormEvent<HTMLInputElement>) => void
  handlePassword: (e: React.FormEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  error: IFormError
  type: string
}

const Form: React.FC<IFormProps> = ({handleEmail, handleSubmit, handlePassword, error, type}) => {
  const {email, password} = error
  return (
    <FormContainer>
      <FormWrapper noValidate={true} onSubmit={handleSubmit}>
        <Input hasError={!!email} onChange={handleEmail} type='email' placeholder='email'/>
        <ErrorMessage>{email}</ErrorMessage>
        <Input hasError={!!password} onChange={handlePassword} type='password' placeholder='password'/>
        <ErrorMessage>{password}</ErrorMessage>
        <Button type='submit'>{type}</Button>
      </FormWrapper>
    </FormContainer>
  )
}

export default Form
