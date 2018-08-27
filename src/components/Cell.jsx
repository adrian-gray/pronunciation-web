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

class Cell extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.props.handleClick({
      column: this.props.column,
      row: this.props.row,
      str: this.props.str
    })
  }

  render () {
    const { classes, hilite, key, str } = this.props
    const cellClasses = hilite ? `${classes.cell} ${classes.cellHiliteBG}` : classes.cell

    return (
      <TableCell className={classes.cell} key={key} onClick={this.handleClick}>
        <Typography className={cellClasses}>
          <SplitHilite str={str} />
        </Typography>
      </TableCell>
    )
  }
}

export default withStyles(styles)(Cell)
