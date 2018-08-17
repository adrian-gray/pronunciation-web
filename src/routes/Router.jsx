import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SoundRouter from './SoundRouter'
import FourOhFour from './../pages/404'
import Landing from './../pages/Landing'
import SignIn from './../pages/SignIn'
import Sounds from './../pages/Sounds'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/sounds' component={Sounds} />
    <Route path='/sound' component={SoundRouter} />
    <Route path='/signin' component={SignIn} />
    <Route default component={FourOhFour} />
  </Switch>
)

export default Router
