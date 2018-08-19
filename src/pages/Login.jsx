import React from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './../firebase'

import {
  Button,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  page: theme.page,
  headspace: theme.headspace,
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
})

class Login extends React.Component {
  render () {
    const { classes, user } = this.props
    if (user) {
      return <Redirect to='/profile' />
    }

    return (
      <Paper className={classes.page}>
        <div className={classes.headspace}>
          <Typography variant='title' gutterBottom>
            {`Login`}
          </Typography>
          <Button
            onClick={auth.handleGoogleLogin}
            variant='contained'
            color='primary'
            className={classes.button}>
            {`Login with Google`}
          </Button>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Login)
