import React from 'react'
import { Link } from 'react-router-dom'

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
    this.state = { open: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    const classes = this.props.classes

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
            <Button component={Link} to='/sounds' color='inherit'>{'Sounds'}</Button>
            <Button color='inherit'>{'Login'}</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar)
