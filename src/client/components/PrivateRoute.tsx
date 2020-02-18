import { Redirect, Route, RouteComponentProps } from 'react-router-dom'

import { IPrivateRouteProps } from '../types'
import React from 'react'
import { auth } from '../services/auth'

const PrivateRoute: React.FC<IPrivateRouteProps> = ({component: Component, ...rest}) => {
  return (
    <Route {...rest}
      render={(props: RouteComponentProps) => {
        return auth.isAuthenticated() ? <Component {...props}/> : <Redirect to='/login'/>
      }}
    />
  )
}

export default PrivateRoute
