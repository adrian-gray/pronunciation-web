import React from 'react'

import {
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace,
  fullWidth: theme.fullWidth
})

const Movie = (props) => {
  const { classes, url, tag } = props

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        {`Movie for ${tag}`}
      </Typography>

      <img className={classes.fullWidth} src={url} alt={`Pronouncing ${tag}`} />
    </div>
  )
}

export default withStyles(styles)(Movie)
