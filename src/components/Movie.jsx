import React from 'react'

import {
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  fullWidth: theme.fullWidth
})

const Movie = (props) => {
  const { classes, url, tag } = props

  return (
    <div>
      <Typography variant='display2' gutterBottom>
        {`Movie for ${tag}`}
      </Typography>
      <img className={classes.fullWidth} src={url} alt={`Pronouncing ${tag}`} />
    </div>
  )
}

export default withStyles(styles)(Movie)
