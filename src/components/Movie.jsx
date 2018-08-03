import React from 'react'

import {
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  image: {
    width: '100%'
  }
})

const Movie = (props) => {
  const { classes, url, tag } = props

  return (
    <div>
      <Typography variant='display2' gutterBottom>
        {`Movie for ${tag}`}
      </Typography>
      <img className={classes.image} src={url} alt={`Pronouncing ${tag}`} />
    </div>
  )
}

export default withStyles(styles)(Movie)
