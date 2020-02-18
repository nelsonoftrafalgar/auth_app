import { useEffect, useState } from "react"

import { History } from 'history'
import { auth } from "../services/auth"

export const useAuthorizationCheck = (history: History) => {
  const [isLoading, setIsLoading] = useState(true)
  const redirectCallback = (shouldRedirect: boolean) => {
    if (shouldRedirect) {
      history.push('/login')
    } else {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    auth.isAuthorized(redirectCallback)
  }, [])

  return {isLoading}
}