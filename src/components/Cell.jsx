import React from 'react'
import SplitHilite from './SplitHilite'

import {
  TableCell,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  cell: theme.cell,
  largeText: theme.largeText
})

const Cell = (props) => {
  const { classes, key, str } = props

  return (
    <TableCell className={classes.cell} key={key}>
      <Typography className={classes.largeText}>
        <SplitHilite str={str} />
      </Typography>
    </TableCell>
  )
}

export default withStyles(styles)(Cell)
