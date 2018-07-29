import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MailchimpCustom from './MailchimpCustom'

const url = '//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a'
const form = ({ subscribe, status, message }) => {
  return (
    <MailchimpCustom
      status={status}
      message={message}
      onValidated={(formData) => subscribe(formData)}
    />
  )
}

const Mailchimp = () => {
  return (
    <div className='container text-center'>
      <div className='mailchimp-subscribe'>
        <MailchimpSubscribe
          url={url}
          render={form}
        />
      </div>
    </div>
  )
}

export default Mailchimp
