import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const Form = ({ status, message, onValidated }) => {
  let email, fname, lname
  const submit = () =>
    email &&
    fname &&
    lname &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value
    })

  const styles = theme => ({
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

  return (
    <form>
      {status === 'sending' && <div>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: '#6b0400' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: '#ffff00' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <TextField
        id='firstName'
        label='First Name'
        className='form-control'
        ref={node => (fname = node)}
        margin='normal'
      />
      <TextField
        id='lastName'
        label='Last Name'
        className='form-control'
        ref={node => (lname = node)}
        margin='normal'
      />
      <TextField
        id='email'
        label='Email'
        className='form-control'
        ref={node => (email = node)}
        margin='normal'
      />
      <br />
      <small id='emailHelp' className='form-text'>We'll never share your details with anyone else.</small>
      <br />
      <Button 
        onClick={submit}
        variant='contained'
        color='primary'
      >
        Keep me updated!
      </Button>
    </form>
  )
}

class MailchimpCustom extends React.Component {
  render () {
    const url = '//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a'

    return (
      <div className='container text-center'>
        <div className='mailchimp-subscribe'>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <Form
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    )
  }
}

export default MailchimpCustom
