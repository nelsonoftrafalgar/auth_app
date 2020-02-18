import { Container, Welcome, WelcomeContainer } from '../styles'

import Nav from './Nav'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useAuthorizationCheck } from '../helpers/useAuthorizationCheck'

const Members = (props: RouteComponentProps) => {
  const {isLoading} = useAuthorizationCheck(props.history)

  return (
    <Container>
      <Nav {...props}/>
      <WelcomeContainer>
        <Welcome>{isLoading ? 'Loading...' : 'Welcome member'}</Welcome>
      </WelcomeContainer>
    </Container>
  )
}

export default Members
