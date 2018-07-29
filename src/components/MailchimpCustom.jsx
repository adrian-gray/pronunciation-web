import React from 'react'
import { withStyles } from '@material-ui/core/styles'
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

    console.log('*', props)
    console.log('**', props.message)
    console.log('***', props.onValidated)

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleValidation () {
    this.props.onValidated({
      EMAIL: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
  }

  handleChange (name) {
    return event => {
      this.setState({
        [name]: event.target.value
      })
    }
  }

  submit () {
    console.log('submitted', this)
    return this.state.email &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.email.indexOf('@') > -1 &&
      this.handleValidation()
  }

  render () {
    console.log('status: ', this.props.status)
    let status
    switch (this.props.staus) {
      case 'sending':
        status = <div>Sending</div>
        break
      case 'error':
        status = (
          <div
            style={{ color: '#6b0400' }}
            dangerouslySetInnerHTML={{ __html: this.props.message }}
          />
        )
        break
      case 'success':
        status = (
          <div
            style={{ color: '#ffff00' }}
            dangerouslySetInnerHTML={{ __html: this.props.message }}
          />
        )
        break
    }

    return (
      <form>
        {status}
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

export default withStyles(styles)(MailchimpForm)
