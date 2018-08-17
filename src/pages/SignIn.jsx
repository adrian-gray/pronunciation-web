import React from 'react'

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
      email: '',
      emailError: null,
      emailErrorMsg: null,
      password: '',
      passwordError: null,
      passwordErrorMsg: '',
      loginError: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('component updated')
  }

  handleChange (name) {
    return (e) => {
      this.setState({
        [name]: e.target.value
      })
    }
  }

  submit () {
    this.setState({
      emailError: null,
      emailErrorMsg: '',
      passwordError: null,
      passwordErrorMsg: ''
    })
    if (!this.state.email) {
      this.setState({
        emailError: true,
        emailErrorMsg: 'Please enter your email'
      })
      return
    }
    if (!this.state.password) {
      this.setState({
        passwordError: true,
        passwordErrorMsg: 'Please enter your passwor'
      })
      return
    }
    console.log('submit')
  }

  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.page}>
        <div className={classes.headspace}>
          <Typography variant='title' gutterBottom>
            {`Login`}
          </Typography>
          <form>
            <TextField
              error={this.state.emailError}
              helperText={this.state.emailErrorMsg}
              id='email'
              label='Email'
              className='form-control'
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin='normal'
            />
            <TextField
              error={this.state.passwordError}
              helperText={this.state.passwordErrorMsg}
              id='password'
              label='Password'
              type='password'
              className='form-control'
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin='normal'
            />
            <br />
            <Button
              onClick={this.submit}
              variant='raised'
            >
              Sign In
            </Button>
          </form>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Login)
