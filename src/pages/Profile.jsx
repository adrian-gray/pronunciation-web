import React from 'react'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  page: theme.page,
  headspace: theme.headspace
})

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      displayName: null,
      photoURL: null,
      subscriber: false
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        displayName: user.displayName,
        photoURL: user.photoURL
      })
    })
  }

  render () {
    const { classes } = this.props

    if (!this.props.isLoggedIn) {
      return <Redirect to='/' />
    }

    return (
      <Paper className={classes.page}>
        <div className={classes.headspace}>
          <Typography variant='title' gutterBottom>
            {`Your profile`}
          </Typography>
          <Typography>
            {this.state.displayName}
          </Typography>
          <div>
            <img width='100px' src={this.state.photoURL} />
          </div>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Profile)
