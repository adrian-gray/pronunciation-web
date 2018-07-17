import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './Landing'
import Pronunciation from './Pronunciation'
import NavBar from './components/NavBar'

const FourOhFour = () => <h1>404</h1>

const App = () =>
  <div className='container'>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/pronunciation' component={Pronunciation} />
      <Route default component={FourOhFour} />
    </Switch>
  </div>

export default App
