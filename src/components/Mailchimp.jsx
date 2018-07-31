import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import {
  Paper,
  withStyles
} from '@material-ui/core'

import MailchimpCustom from './MailchimpCustom'

const url = '//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a'

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
    <Paper>
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
