import { Redirect, Route, RouteProps } from 'react-router-dom'

import React from 'react'
import { auth } from '../services/auth'

interface IPrivateRouteProps {
  component: React.ComponentType<RouteProps>
  path: string
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({component: Component, ...rest}) => {
  return (
    <Route {...rest}
      render={(props) => {
        return auth.isAuthenticated() ? <Component {...props}/> : <Redirect to='/login'/>
      }}
    />
  )
}

export default PrivateRoute
