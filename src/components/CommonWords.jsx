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
  },
  words: {
    wordSpacing: '1.5'
  }
})

const CommonWords = (props) => {
  const { classes, tag, words } = props
  const cells = words.map((el, index) => (
    <TableCell key={index}>
      <Typography variant='title' gutterBottom>
        <SplitHilite str={el} key={el} />
      </Typography>
    </TableCell>
  ))

  let currentRow = 0
  let cellCount = 0
  const rows = []
  do {
    rows[currentRow] = (
      <TableRow key={currentRow}>
        {cells[cellCount++]}
        {cells[cellCount] ? cells[cellCount++] : null}
        {cells[cellCount] ? cells[cellCount++] : null}
      </TableRow>
    )
    currentRow++
  } while (cellCount < cells.length)

  return (
    <div>
      <Typography variant='title' className={classes.title} gutterBottom>
        {'Common words with '}<SplitHilite str={tag} />
      </Typography>
      <Paper className={classes.root}>
        <Table className={classes.root}>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(CommonWords)
