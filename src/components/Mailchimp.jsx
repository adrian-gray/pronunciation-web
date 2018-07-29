import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MailchimpForm from './MailchimpForm'

const url = '//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a'
const form = ({ subscribe, status, message }) => {
  console.log('======== bork')
  return (
    <MailchimpForm
      status={status}
      message={'cat'}
      onValidated={(formData) => subscribe(formData)}
    />
  )
}

const MailchimpCustom = () => {
  console.log('+++++++')
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

export default MailchimpCustom
