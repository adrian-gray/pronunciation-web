import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import {
  Paper,
  withStyles
} from '@material-ui/core'

import MailchimpCustom from './MailchimpCustom'

const url = '//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a'

const styles = (theme) => ({
  mailchimp: {
    backgroundColor: '#fff8f0'
  }
})

const form = ({ subscribe, status, message }) => {
  return (
    <MailchimpCustom
      status={status}
      message={message}
      onValidated={(formData) => subscribe(formData)}
    />
  )
}

const Mailchimp = (props) => {
  return (
    <Paper className={props.classes.mailchimp}>
      <div className='mailchimp-subscribe'>
        <MailchimpSubscribe
          url={url}
          render={form}
        />
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Mailchimp)
