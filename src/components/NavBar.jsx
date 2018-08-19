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
      open: false
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleSignout = this.handleSignout.bind(this)
  }

  handleToggle () {
    this.setState({ open: !this.state.open })
  }

  handleSignout () {
    firebase.auth().signOut()
  }

  render () {
    const { classes, user } = this.props

    let changeLoginStatus
    if (user) {
      changeLoginStatus = (
        <Button onClick={this.handleSignout} color='inherit'>{'Sign Out'}</Button>
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
            <Button href='/sounds' className={classes.button} color='inherit'>
              {'Sounds'}
            </Button>
            {changeLoginStatus}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar)
