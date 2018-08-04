import React from 'react'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
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

const Phrases = (props) => {
  const { classes, phrases, tag } = props
  const list = Object.entries(phrases).map((arr, index) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <Typography variant='title' gutterBottom>
            <SplitHilite str={arr[0]} />
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant='title' gutterBottom>
            <SplitHilite str={arr[1]} />
          </Typography>
        </TableCell>
      </TableRow>
    )
  })

  return (
    <div>
      <Typography variant='title' className={classes.title} gutterBottom>
        {`Phrases using ${tag}`}
      </Typography>

      <Paper className={classes.root}>
        <Table className={classes.root}>
          <TableBody>
            {list}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Phrases)
