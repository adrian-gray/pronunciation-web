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
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
})

const Dialogues = (props) => {
  const { classes, dialogues, tag } = props
  console.log('classes', classes)
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
    <Paper className={classes.page} key={index}>
      <List className='plain-list'>
        {extractLines(dialogue)}
      </List>
    </Paper>
  )

  const lines = dialogues.map(expandDialogue)

  return (
    <div>
      <Typography variant='title' className={classes.title} gutterBottom>
        {'Short dialogues using '}<SplitHilite str={tag} />
      </Typography>
      {lines}
    </div>
  )
}

export default withStyles(styles)(Dialogues)
