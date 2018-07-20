import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './Landing'
import Pronunciation from './Pronunciation'
import SEO from './components/SEO'
import NavBar from './components/NavBar'

const FourOhFour = () => <h1>404</h1>

const App = () =>
  <div className='container'>
    <SEO />
    <NavBar />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/app' component={Pronunciation} />
      <Route default component={FourOhFour} />
    </Switch>
  </div>

export default App
