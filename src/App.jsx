import React from 'react'
import firebase from 'firebase/app'
import ReactGA from 'react-ga'

import {
  CssBaseline,
  MuiThemeProvider,
  withStyles,
  withTheme
} from '@material-ui/core'

import { auth } from './firebase'
import NavBar from './components/NavBar'
import Router from './Router'
import SEO from './components/SEO'
import Theme from './Theme'

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

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      subscriptionLevel: null
    }

    this.initFirebaseAuth = this.initFirebaseAuth.bind(this)
    this.signout = this.signout.bind(this)
    this.handleAuthChange = this.handleAuthChange.bind(this)
  }

  componentDidMount () {
    if (window && window.location.href.includes('pronounceweb.com')) {
      ReactGA.initialize('UA-122566851-1')
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
    this.initFirebaseAuth()
  }

  initFirebaseAuth () {
    firebase.auth().onAuthStateChanged(this.handleAuthChange)
  }

  handleAuthChange (user) {
    if (user) {
      auth.getUserData()
        .then(val => {
          this.setState({ subscriptionLevel: val })
        })
    }
    this.setState({ user })
  }

  signout () {
    auth.signOut()
    console.log('user is null')
    this.setState({
      user: null,
      subscriptionLevel: 0
    })
  }

  render () {
    const { classes } = this.props

    return (
      <div>
        <CssBaseline />
        <MuiThemeProvider theme={Theme}>
          <div className={classes.root}>
            <SEO />
            <NavBar user={this.state.user} signout={this.signout} />
            <Router
              user={this.state.user}
              subscriptionLevel={this.state.subscriptionLevel}
            />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withTheme()(withStyles(styles)(App))
