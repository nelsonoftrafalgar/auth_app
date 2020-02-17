import { Container, Welcome, WelcomeContainer } from '../styles'

import Nav from './Nav'
import React from 'react'
import { useAuthorizationCheck } from '../helpers/useAuthorizationCheck'

const Members = ({history}: any) => {
  const {isLoading} = useAuthorizationCheck(history)

  return (
    <Container>
      {isLoading
        ? <Welcome>Loading...</Welcome>
        : <>
            <Nav/>
            <WelcomeContainer>
              <Welcome>Welcome member</Welcome>
            </WelcomeContainer>
          </>
      }
    </Container>
  )
}

export default Members
