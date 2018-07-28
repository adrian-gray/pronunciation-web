import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// const MailchimpForm = ({ status, message, onValidated }) => {

class MailchimpForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      status: props.status,
      message: props.message,
      firstName: '',
      lastName: '',
      email: ''
    }
    this.styles = this.styles.bind(this)
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
    return this.email &&
      this.firstName &&
      this.lastName &&
      this.email.value.indexOf('@') > -1 &&
      this.state.onValidated({
        EMAIL: this.email.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value
      })
  }

  styles (theme) {
    return {
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
    }
  }

  render () {
    return (
      <form>
        {this.status === 'sending' && <div>sending...</div>}
        {this.status === 'error' && (
          <div
            style={{ color: '#6b0400' }}
            dangerouslySetInnerHTML={{ __html: this.message }}
          />
        )}
        {this.status === 'success' && (
          <div
            style={{ color: '#ffff00' }}
            dangerouslySetInnerHTML={{ __html: this.message }}
          />
        )}
        <TextField
          id='firstName'
          label='First Name'
          className='form-control'
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin='normal'
        />
        <TextField
          id='lastName'
          label='Last Name'
          className='form-control'
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          margin='normal'
        />
        <TextField
          id='email'
          label='Email'
          className='form-control'
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin='normal'
        />
        <br />
        <small id='emailHelp' className='form-text'>We'll never share your details with anyone else.</small>
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

export default MailchimpForm
