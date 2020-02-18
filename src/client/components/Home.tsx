import { Container, Welcome, WelcomeContainer } from '../styles'

import Nav from './Nav'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

const Home = (props: RouteComponentProps) => {
  return (
    <Container>
      <Nav {...props}/>
      <WelcomeContainer>
        <Welcome>Welcome guest</Welcome>
      </WelcomeContainer>
    </Container>
  )
}

export default Home
