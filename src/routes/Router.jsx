import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SoundRouter from './SoundRouter'
import Landing from './../pages/Landing'
import Sounds from './../pages/Sounds'

const FourOhFour = () => <h1>404</h1>

const Router = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/sounds' component={Sounds} />
    <Route path='/sound' component={SoundRouter} />
    <Route default component={FourOhFour} />
  </Switch>
)

export default Router
