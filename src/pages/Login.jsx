import React from 'react'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app'

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
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this)
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this)
  }

  handleGoogleLogin () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        this.setState({ isLoggedIn: true })
      })
  }

  redirectIfLoggedIn () {
    if (this.state.isLoggedIn) {
      return <Redirect to='/profile' />
    }
  }

  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.page}>
        {this.redirectIfLoggedIn()}
        <div className={classes.headspace}>
          <Typography variant='title' gutterBottom>
            {`Login`}
          </Typography>
          <Button
            onClick={this.handleGoogleLogin}
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
