import React from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import data from './../data/data'
import SEO from './../components/SEO'
import Phoneme from './../components/Phoneme'

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

const Sounds = (props) => {
  const { classes } = props

  const phonemes = data.phonemes
  const list = Object.keys(phonemes)
  const cards = list.map(phoneme => {
    const title = phonemes[phoneme]['name']
    const tag = phonemes[phoneme]['tag']
    const link = `/sounds/pronounce_${title}`
    const words = phonemes[phoneme]['commonWords']
    return <Phoneme key={title} title={title} tag={tag} link={link} words={words} />
  })

  return (
    <Paper className={classes.root}>
      <SEO meta='sounds' />
      <Typography variant='display1' gutterBottom>
        {'Phoenetic English Pronunciation'}
      </Typography>
      {cards}
    </Paper>
  )
}

export default withStyles(styles)(Sounds)
