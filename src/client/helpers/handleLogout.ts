import { AxiosError } from "axios"
import { History } from 'history'
import { auth } from "../services/auth"
import { logoutUrl } from "../endpoints"
import { sendRequest } from "./sendRequest"

const handleLogoutError = (error: AxiosError) => {
  throw error
}

export const handleLogout = (history: History) => () => {
  const token = auth.getToken()

  if (!token) {
    return
  }

  const handleLogoutSuccess = () => {
    history.push('/')
  }

  const requestBody = {
    token: atob(token)
  }
  sendRequest(logoutUrl, requestBody, handleLogoutError, handleLogoutSuccess)
  auth.destroyToken()
}