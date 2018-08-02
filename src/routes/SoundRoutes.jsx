import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sounds from './../pages/Sounds'
import Sound from './../pages/Sound'

const SoundRoutes = () => (
  <Switch>
    <Route exact path='/sounds' component={Sounds} />
    <Route path='/sounds/:phoneme' component={Sound} />
  </Switch>
)

export default SoundRoutes
