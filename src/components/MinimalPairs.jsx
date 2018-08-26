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

import MemberGate from './MemberGate'
import SplitHilite from './SplitHilite'

const styles = (theme) => ({
  largeText: theme.largeText,
  headspace: theme.headspace,
  cell: theme.cell
})

const MinimalPairs = (props) => {
  const { classes, ipa, pairs, tag, ...other } = props

  const rows = pairs.map((pair, key) => (
    <TableRow key={key}>
      <TableCell className={classes.cell} key={0}>
        <Typography className={classes.largeText}>
          <SplitHilite str={pair[0]} />
        </Typography>
      </TableCell>
      <TableCell className={classes.cell} key={1}>
        <Typography className={classes.largeText}>
          <SplitHilite str={pair[1]} />
        </Typography>
      </TableCell>
    </TableRow>
  ))

  const display = (
    <Paper>
      <Table>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </Paper>
  )

  return (
    <div className={classes.headspace} >
      <Typography variant='title' gutterBottom>
        {`English  minimal pairs with ${tag} - `}
        <SplitHilite str={ipa} />
      </Typography>
      <MemberGate content={display} {...other} />
    </div>
  )
}

export default withStyles(styles)(MinimalPairs)
