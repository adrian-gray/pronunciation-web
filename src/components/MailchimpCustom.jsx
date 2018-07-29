import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
})

class MailchimpForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      nameError: null,
      nameErrorMsg: '',
      email: '',
      emailError: null,
      emailErrorMsg: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange (name) {
    return event => {
      this.setState({
        [name]: event.target.value
      })
    }
  }

  submit () {
    this.setState({
      emailError: null,
      emalErrorMsg: '',
      nameError: null,
      nameErrorMsg: ''
    })
    if (!this.state.name) {
      this.setState({
        nameEror: true,
        nameErrorMsg: 'Oops, you forgot your name.'
      })
      return
    }
    if (!this.state.email) {
      this.setState({
        emailError: true,
        emailErrorMsg: 'Oops, you forgot your email.'
      })
      return
    }
    this.props.onValidated({
      EMAIL: this.state.email,
      FNAME: this.state.name
    })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.status !== prevProps.status) {
      if (this.props.status === 'error') {
        const message = this.props.message
        switch (true) {
          case (message === '0 - An email address must contain a single @'):
            this.setState({
              emailError: true,
              emailErrorMsg: 'An email address must contain a single @'
            })
            break
          case (message === '0 - The username portion of the email address is empty'):
            this.setState({
              emailError: true,
              emailErrorMsg: 'The username portion of the email is empty'
            })
            break
          case (message.includes('0 - The domain portion of the email address is invalid')):
            this.setState({
              emailError: true,
              emailErrorMsg: 'The domain portion of the email is invalid'
            })
            break
          case (message.includes('0 - The username portion of the email address is invalid')):
            this.setState({
              emailError: true,
              emailErrorMsg: 'The username portion of the email is invalid'
            })
            break
          case (message.includes('This email address looks fake or invalid')):
            this.setState({
              emailError: true,
              emailErrorMsg: 'This email address looks fake or invalid'
            })
            break
          case (message.includes('has too many recent signup requests')):
            this.setState({
              emailError: true,
              emailErrorMsg: 'This email has too many recent signup requests'
            })
            break
          default:
            this.setState({
              nameError: true,
              nameErrorMsg: 'Something went wrong, please check your details'
            })
        }
      }
    }
  }

  render () {
    let status
    switch (this.props.status) {
      case 'sending':
        status = (
          <Typography gutterBottom>
            {`Sending subscription`}
          </Typography>
        )
        break
      case 'success':
        status = (
          <Typography gutterBottom>
            {`Thankyou for subscribing`}
          </Typography>
        )
    }

    return (
      <form>
        {status}
        <TextField
          error={this.state.nameError}
          helperText={this.state.nameErrorMsg}
          id='name'
          label='Your first name'
          className='form-control'
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin='normal'
        />
        <TextField
          error={this.state.emailError}
          helperText={this.state.emailErrorMsg}
          id='email'
          label='Your Email'
          className='form-control'
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin='normal'
        />
        <br />
        <Typography gutterBottom>
          {`We hate spam and will never share your details with anyone else.`}
        </Typography>
        <br />
        <Button
          onClick={this.submit}
          variant='contained'
          color='primary'
        >
          Keep me updated!
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(MailchimpForm)
