import { Header, NavButton } from '../styles'

import React from 'react'

const Nav = () => {
  return (
    <Header>
      <NavButton to='/login'>Login</NavButton>
      <NavButton to='/logout'>Logout</NavButton>
      <NavButton to='/register'>Register</NavButton>
      <NavButton to='/member'>Member</NavButton>
    </Header>
  )
}

export default Nav
