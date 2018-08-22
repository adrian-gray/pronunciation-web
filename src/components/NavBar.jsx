import React from 'react'
import { Link } from 'react-router-dom'

import {
  AppBar,
  Button,
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
  }

  handleToggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    const { classes, user } = this.props

    let changeLoginStatus
    if (user) {
      changeLoginStatus = (
        <Button onClick={this.props.signout} color='inherit'>{'Sign Out'}</Button>
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
            <Typography
              variant='subheading'
              className={classes.flex}
            >
              <Button component={Link} to='/home'>
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
