import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
  AppBar,
  Button,
  IconButton,
  MenuIcon,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}
//         <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
//           <MenuIcon />
//          </IconButton>

function NavBar (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.flex}>
            {'Pronounce Web'}
          </Typography>
          <Button color='inherit' component={Link} to='/'>{'Home'}</Button>
          <Button color='inherit'>{'Login'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)
