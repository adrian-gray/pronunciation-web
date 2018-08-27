import React from 'react'
import SplitHilite from './SplitHilite'

import {
  TableCell,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  cell: theme.cell,
  cellHiliteBG: theme.cellHiliteBG,
  largeText: theme.largeText
})

const Cell = (props) => {
  const { classes, hilite, key, str } = props
  const cellClasses = hilite ? `${classes.cell} ${classes.cellHiliteBG}` : classes.cell

  return (
    <TableCell className={classes.cell} key={key}>
      <Typography className={cellClasses}>
        <SplitHilite str={str} />
      </Typography>
    </TableCell>
  )
}

export default withStyles(styles)(Cell)
