import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import CssBaseline from '@material-ui/core/CssBaseline'

import SoundRoutes from './routes/SoundRoutes'

import Landing from './pages/Landing'

import SEO from './components/SEO'
import NavBar from './components/NavBar'

const FourOhFour = () => <h1>404</h1>

const App = () => {
  if (window && window.location.href.includes('pronounceweb.com')) {
    ReactGA.initialize('UA-122566851-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  return (
    <BrowserRouter>
      <Fragment>
        <CssBaseline />
        <div className='container'>
          <SEO />
          <NavBar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/sounds' component={SoundRoutes} />
            <Route default component={FourOhFour} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
