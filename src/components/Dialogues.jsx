import React from 'react'

import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import SplitHilite from './SplitHilite'

const styles = (theme) => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  subCanvas: theme.subCanvas
})

const Dialogues = (props) => {
  const { classes, dialogues, ipa } = props

  const extractLines = (dialogue, index) => {
    return dialogue.map((line, index) => (
      <ListItem key={index}>
        <ListItemText>
          <SplitHilite str={line} />
        </ListItemText>
      </ListItem>
    ))
  }

  const expandDialogue = (dialogue, index) => (
    <Paper className={classes.subCanvas} key={index}>
      <List>
        {extractLines(dialogue)}
      </List>
    </Paper>
  )

  const lines = dialogues.map(expandDialogue)

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        {'Short dialogues using '}
        <SplitHilite str={ipa} />
      </Typography>
      {lines}
    </div>
  )
}

export default withStyles(styles)(Dialogues)
