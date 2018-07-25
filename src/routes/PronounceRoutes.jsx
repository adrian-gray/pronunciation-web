import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Pronunciation from './../pages/Pronunciation'
import Pronounce from './../pages/Pronounce'

const PronounceRoutes = () => (
  <Switch>
    <Route exact path='/pronounce' component={Pronunciation} />
    <Route path='/pronounce/:sound' component={Pronounce} />
  </Switch>
)

export default PronounceRoutes
