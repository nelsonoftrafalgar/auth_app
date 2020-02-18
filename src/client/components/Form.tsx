import { Button, ErrorMessage, FormContainer, FormWrapper, Input } from '../styles'

import { IFormProps } from '../types'
import React from 'react'

const Form: React.FC<IFormProps> = ({handleEmail, handleSubmit, handlePassword, error, type, nav}) => {
  const {email, password} = error
  return (
    <FormContainer>
      {nav}
      <FormWrapper noValidate={true} onSubmit={handleSubmit}>
        <Input hasError={!!email} onChange={handleEmail} type='email' placeholder='email'/>
        <ErrorMessage>{email}</ErrorMessage>
        <Input hasError={!!password} onChange={handlePassword} type='password' placeholder='password'/>
        <ErrorMessage>{password}</ErrorMessage>
        <Button margin='auto auto 0' type='submit'>{type}</Button>
      </FormWrapper>
    </FormContainer>
  )
}

export default Form
