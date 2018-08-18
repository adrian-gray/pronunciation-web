import React from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'

import {
  AppBar,
  Button,
  Drawer,
  MenuItem,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  white: {
    color: '#FFFFFF'
  }
})

class NavBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      open: false
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.initFirebaseAuth = this.initFirebaseAuth.bind(this)
    this.handleAuthChange = this.handleAuthChange.bind(this)
  }

  componentDidMount () {
    this.initFirebaseAuth()
  }

  handleToggle () {
    this.setState({ open: !this.state.open })
  }

  initFirebaseAuth () {
    firebase.auth().onAuthStateChanged(this.handleAuthChange)
  }

  handleAuthChange (e) {
    let isLoggedIn = false
    if (e) {
      isLoggedIn = true
    }

    this.setState({ isLoggedIn })
  }

  handleGoogleLogin () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  handleSignOut () {
    firebase.auth().signOut()
  }

  render () {
    const classes = this.props.classes

    let changeLoginStatus
    console.log('render', this.state.isLoggedIn)
    if (this.state.isLoggedIn) {
      changeLoginStatus = (
        <Button onClick={this.handleSignOut} color='inherit'>{'Sign Out'}</Button>
      )
    } else {
      changeLoginStatus = (
        <Button component={Link} to='/login' color='inherit'>{'Log In'}</Button>
      )
    }

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Drawer
              open={this.state.open}
              onClick={this.handleToggle}
              onKeyDown={this.handleToggle}
            >
              <MenuItem>
                <Button href='/' className={classes.button}>
                  {'Home'}
                </Button>
              </MenuItem>
              <MenuItem>
                <Button href='/sounds' className={classes.button}>
                  {'Sounds'}
                </Button>
              </MenuItem>
            </Drawer>
            <Typography
              variant='subheading'
              className={classes.flex}
            >
              <Button href='/'>
                <span className={classes.white}>
                  {'Pronounce Web'}
                </span>
              </Button>
            </Typography>
            {changeLoginStatus}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar)
