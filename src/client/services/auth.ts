import axios from "axios"

class Auth {
  insertToken = (token: string) => {
    const encodedToken = btoa(token)
    window.sessionStorage.setItem('token', encodedToken)
  }

  destroyToken = () => {
    window.sessionStorage.removeItem('token')
  }

  isAuthenticated = () => {
    const storageToken = window.sessionStorage.getItem('token')
    return !!storageToken
  }

  isAuthorized = async (callback: (shouldRedirect: boolean) => void) => {
    const target = 'http://localhost:4000/verify'

    try {
      const storageToken = window.sessionStorage.getItem('token')!
      const decodedToken = atob(storageToken)
      const body = {decodedToken}
      const response = await axios.post(target, body)
      callback(response.status !== 200)
    } catch {
      callback(true)
    }
  }
}

export const auth = new Auth()

