import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Members from './components/Members'
import PrivateRoute from './components/PrivateRoute'
import React from 'react'
import Register from './components/Register'
import { createGlobalStyle } from 'styled-components'

const StyleReset = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}`

const App = () => {
  return (
    <>
      <StyleReset/>
        <Router>
          <Switch>
          <Route exact={true} path='/' component={() => <Home/>}/>
          <PrivateRoute path='/member' component={Members}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
