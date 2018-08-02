import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'

import {
  CssBaseline,
  withStyles
} from '@material-ui/core'

import SoundRoutes from './routes/SoundRoutes'
import Landing from './pages/Landing'
import Sounds from './pages/Sounds'
import SEO from './components/SEO'
import NavBar from './components/NavBar'

const FourOhFour = () => <h1>404</h1>

const styles = (theme) => ({
  root: {
    marginTop: 0,
    marginLeft: 'auto',
    marginBottom: 0,
    marginRight: 'auto',
    paddingTop: 0,
    paddingLeft: 20,
    paddingBottom: 0,
    paddingRight: 20,
    maxWidth: 1024
  }
})

class App extends Component {
  componentDidMount () {
    if (window && window.location.href.includes('pronounceweb.com')) {
      ReactGA.initialize('UA-122566851-1')
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  render () {
    const { classes } = this.props

    return (
      <BrowserRouter>
        <Fragment>
          <CssBaseline />
          <div className={classes.root}>
            <SEO />
            <NavBar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/sounds' component={Sounds} />
              <Route path='/sound' component={SoundRoutes} />
              <Route default component={FourOhFour} />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(App)
