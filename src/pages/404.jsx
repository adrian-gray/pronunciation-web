import React from 'react'
import { Link } from 'react-router-dom'

import {
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace
})

const FourOhFour = (props) => {
  const { classes } = props

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        {`Oops, that address is not a thing I understand.`}
      </Typography>
      <Typography gutterBottom>
        <Link to='/'>
          {'Head to the homepage and try again.'}
        </Link>
      </Typography>
    </div>
  )
}

export default withStyles(styles)(FourOhFour)
