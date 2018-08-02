import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sound from './../pages/Sound'
import Activity from './../pages/Activity'

const SoundRoutes = () => (
  <Switch>
    <Route path='/sound/:phoneme/:activity' component={Activity} />
    <Route path='/sound/:phoneme' component={Sound} />
  </Switch>
)

export default SoundRoutes
