import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

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

  return (
    <form>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className='form-group'>
        <input
          className='form-control'
          ref={node => (fname = node)}
          type='text'
          placeholder='First name'
        />
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          ref={node => (lname = node)}
          type='text'
          placeholder='Last name'
        />
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          ref={node => (email = node)}
          type='email'
          id='email'
          placeholder='Email'
        />
        <small id='emailHelp' className='form-text'>We'll never share your details with anyone else.</small>
      </div>
      <button type='button' className='btn btn-warning btn-block' onClick={submit}>
        Keep me updated!
      </button>
    </form>
  )
}

class MailchimpCustom extends React.Component {
  render () {
    const url = '//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&ampid=f0489cd39a'

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
