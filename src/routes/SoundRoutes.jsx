import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sound from './../pages/Sound'

const SoundRoutes = () => (
  <Switch>
    <Route path='/sound/:phoneme/:activity?' component={Sound} />
    <Route path='/sound/:phoneme' component={Sound} />
  </Switch>
)

export default SoundRoutes
