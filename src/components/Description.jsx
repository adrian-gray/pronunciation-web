import React from 'react'

import {
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles
} from '@material-ui/core'

import SplitHilite from './SplitHilite'

const styles = (theme) => ({
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
})

const Description = (props) => {
  const { arr, classes, phoneme } = props

  const list = arr.map((el, i) => (
    <ListItem key={i}>
      <ListItemText>
        {el}
      </ListItemText>
    </ListItem>
  ))

  return (
    <div>
      <Typography variant='title' className={classes.title} gutterBottom>
        {'How to pronounce '}<SplitHilite str={phoneme} />
      </Typography>
      <List>
        {list}
      </List>
    </div>
  )
}

export default withStyles(styles)(Description)
