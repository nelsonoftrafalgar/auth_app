import { AxiosError, AxiosResponse } from "axios"

import { History } from 'history'
import { IFormError } from "../types"
import { auth } from "../services/auth"
import { sendRequest } from "./sendRequest"
import { useState } from "react"
import { validateInputs } from "./validateInputs"

export const useFormState = (history: History, url: string) => {
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

  const handleLoginError = (error: AxiosError) => {
    const {status, data: {msg}} = error.response as AxiosResponse
    if (status === 409 || status === 404) {
      setError({email: msg, password: msg})
    }

    throw error
  }

  const handleLoginSuccess = (response: AxiosResponse) => {
    auth.insertToken(response.data.token)
    history.push('/member')
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

    const requestBody = {
      email,
      password
    }

    sendRequest(url, requestBody, handleLoginError, handleLoginSuccess)
  }

  return {error, handleEmail, handlePassword, handleSubmit}
}