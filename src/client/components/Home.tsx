import { Container, Welcome, WelcomeContainer } from '../styles'

import Nav from './Nav'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Nav/>
      <WelcomeContainer>
        <Welcome>Welcome guest</Welcome>
      </WelcomeContainer>
    </Container>
  )
}

export default Home
