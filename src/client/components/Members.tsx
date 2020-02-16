import { Container, Welcome, WelcomeContainer } from '../styles'
import React, { useEffect } from 'react'

import Nav from './Nav'
import { auth } from '../services/auth'

const Members = ({history}: any) => {
  const redirectCallback = (shouldRedirect: boolean) => {
    if (shouldRedirect) {
      history.push('/login')
    }
  }

  useEffect(() => {
    auth.isAuthorized(redirectCallback)
  }, [])


  return (
    <Container>
      <Nav/>
      <WelcomeContainer>
        <Welcome>Welcome member</Welcome>
      </WelcomeContainer>
    </Container>
  )
}

export default Members
