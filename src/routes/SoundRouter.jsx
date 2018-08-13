import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FourOhFour from './../pages/404'
import Sound from './../pages/Sound'

const SoundRoutes = () => (
  <Switch>
    <Route path='/sound/:phoneme/:activity?' component={Sound} />
    <Route path='/sound/:phoneme' component={Sound} />
    <Route default component={FourOhFour} />
  </Switch>
)

export default SoundRoutes
