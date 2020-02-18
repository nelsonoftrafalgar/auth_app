import { Button, Header, NavButton } from '../styles'

import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { auth } from '../services/auth'
import { handleLogout } from '../helpers/handleLogout'

const Nav = (props: RouteComponentProps) => {
  return (
    <Header>
      <NavButton to='/'>Home</NavButton>
      {auth.isAuthenticated()
        ? <Button onClick={handleLogout(props.history)} margin='0 20px 0 0'>Logout</Button>
        : <NavButton to='/login'>Login</NavButton>
      }
      <NavButton to='/register'>Register</NavButton>
      <NavButton to='/member'>Member</NavButton>
    </Header>
  )
}

export default Nav
