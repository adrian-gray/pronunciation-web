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
  headspace: theme.headspace,
  largeText: theme.largeText,
  subCanvas: theme.subCanvas
})

const Words = (props) => {
  const { classes, tag, words } = props
  const list = Object.entries(words).map((arr, index) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <Typography className={classes.largeText}>
            <SplitHilite str={arr[0]} />
          </Typography>
        </TableCell>
        <TableCell>
          <Typography className={classes.largeText}>
            <SplitHilite str={arr[1]} />
          </Typography>
        </TableCell>
      </TableRow>
    )
  })

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        {`Words using ${tag}`}
      </Typography>

      <Paper className={classes.subCanvas}>
        <Table className={classes.root}>
          <TableBody>
            {list}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Words)
