import React from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './../firebase'

import {
  Button,
  Paper,
  TextField,
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
      name: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange (name) {
    return (e) => {
      this.setState({
        [name]: e.target.value
      })
    }
  }

  submit () {
    console.log('submitting: ', this.state.name, this.state.email)
  }

  render () {
    const { classes, user } = this.props
    if (user) {
      return <Redirect to='/home' />
    }

    return (
      <Paper className={classes.page}>
        <div className={classes.headspace}>
          <Typography variant='title' gutterBottom>
            {`Signin`}
          </Typography>
          <Button
            onClick={auth.handleGoogleLogin}
            variant='contained'
            color='primary'
            className={classes.button}>
            {`Login with Google`}
          </Button>
          <Typography variant='title' className={classes.headspace} gutterBottom>
            {`Or, signup with email `}
          </Typography>
          <form>
            <TextField
              id='name'
              label='Your first name'
              className='form-control'
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin='normal'
            />
            <TextField
              id='email'
              label='Your email'
              className='form-control'
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin='normal'
            />
            <TextField
              id='password'
              label='Password'
              className='form-control'
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin='normal'
            />
            <Button
              onClick={this.submit}
              variant='raised'
            >
              {'Sign up'}
            </Button>
          </form>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Login)
