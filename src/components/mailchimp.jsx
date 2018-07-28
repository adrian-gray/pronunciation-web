import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MailchimpForm from './MailchimpForm'

class MailchimpCustom extends React.Component {
  render () {
    const url = '//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a'

    return (
      <div className='container text-center'>
        <div className='mailchimp-subscribe'>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <MailchimpForm
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
