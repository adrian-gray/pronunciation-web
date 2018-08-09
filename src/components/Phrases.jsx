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
  subCanvas: theme.subCanvas,
  largeText: theme.largeText
})

const Phrases = (props) => {
  const { classes, ipa, phrases } = props

  const list = Object.entries(phrases).map((arr, index) => {
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
        {`Phrases using `}
        <SplitHilite str={ipa} />
      </Typography>

      <Paper className={classes.subCanvas}>
        <Table>
          <TableBody>
            {list}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Phrases)
