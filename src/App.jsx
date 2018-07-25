import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ReactGA from 'react-ga'

import PronounceRoutes from './routes/PronounceRoutes'

import Landing from './pages/Landing'

import SEO from './components/SEO'
import NavBar from './components/NavBar'

const FourOhFour = () => <h1>404</h1>

const App = () => {
  if (window) {
    ReactGA.initialize('UA-122566851-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  return (
    <BrowserRouter>
      <div className='container'>
        <SEO />
        <NavBar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/pronounce' component={PronounceRoutes} />
          <Route default component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
