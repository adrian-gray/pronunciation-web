import React from 'react'

import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles
} from '@material-ui/core'

import SplitHilite from './SplitHilite'

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  },
  image: {
    width: '100%'
  }
})

const HowToPronounce = (props) => {
  const { arr, classes, phoneme, url } = props

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

      <Paper className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <img className={classes.image} src={url} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <List>
              {list}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(HowToPronounce)
