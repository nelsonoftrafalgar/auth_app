import { IsAuthorizedCallback } from "../types"
import axios from "axios"
import { verifyUrl } from "../endpoints"

class Auth {
  insertToken = (token: string) => {
    const encodedToken = btoa(token)
    window.sessionStorage.setItem('token', encodedToken)
  }

  destroyToken = () => {
    window.sessionStorage.removeItem('token')
  }

  getToken = () => {
    return window.sessionStorage.getItem('token')
  }

  isAuthenticated = () => {
    const storageToken = this.getToken()
    return !!storageToken
  }

  isAuthorized = async (callback: IsAuthorizedCallback) => {
    try {
      const storageToken = this.getToken()!
      const decodedToken = atob(storageToken)
      const body = {decodedToken}
      const response = await axios.post(verifyUrl, body)
      callback(response.status !== 200)
    } catch {
      callback(true)
    }
  }
}

export const auth = new Auth()

