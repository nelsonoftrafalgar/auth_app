import { Header, NavButton } from '../styles'

import React from 'react'
import { auth } from '../services/auth'

const Nav = () => {
  return (
    <Header>
      <NavButton to='/'>Home</NavButton>
      {auth.isAuthenticated()
        ? <NavButton to='/logout'>Logout</NavButton>
        : <NavButton to='/login'>Login</NavButton>
      }
      <NavButton to='/register'>Register</NavButton>
      <NavButton to='/member'>Member</NavButton>
    </Header>
  )
}

export default Nav
