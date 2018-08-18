import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SoundRouter from './SoundRouter'
import FourOhFour from './../pages/404'
import Landing from './../pages/Landing'
import Login from './../pages/Login'
import Sounds from './../pages/Sounds'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/sounds' component={Sounds} />
    <Route path='/sound' component={SoundRouter} />
    <Route path='/login' component={Login} />
    <Route default component={FourOhFour} />
  </Switch>
)

export default Router
