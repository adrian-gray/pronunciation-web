import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import {
  CssBaseline,
  withStyles,
  withTheme
} from '@material-ui/core'

import Router from './routes/Router'
import SEO from './components/SEO'
import NavBar from './components/NavBar'

const styles = (theme) => ({
  root: {
    marginTop: 0,
    marginLeft: 'auto',
    marginBottom: 0,
    marginRight: 'auto',
    padding: 0,
    maxWidth: 1024,
    [theme.breakpoints.up('xs')]: {
      paddingRight: 0,
      paddingLeft: 0
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: 20,
      paddingLeft: 20
    }
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
            <Router />
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default withTheme()(withStyles(styles)(App))
