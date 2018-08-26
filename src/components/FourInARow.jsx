import React from 'react'

import Cell from './Cell'
import MemberGate from './MemberGate'
import SplitHilite from './SplitHilite'

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  largeText: theme.largeText,
  headspace: theme.headspace,
  centre: theme.centre,
  cell: theme.cell,
  headBG: {
    background: '#DDD'
  }
})

const FourInARow = (props) => {
  const { classes, correct, example, ipa, rows, tag, ...other } = props

  const displayRows = rows.map((row, key) => {
    const cells = row.map((word, i) => <Cell str={word} key={i} {...other} />)
    return (
      <TableRow key={key}>
        {cells}
      </TableRow>
    )
  })

  const guide = example.map((word, i) => <Cell str={word} key={i} {...other} />)
  const exHeadClass = `${classes.headBG} ${classes.centre}`
  console.log('exHeadClass', exHeadClass)

  const tableHead = (
    <TableHead className={exHeadClass}>
      <TableRow>
        {guide}
      </TableRow>
    </TableHead>
  )

  const display = (
    <div>
      <Typography className={classes.headBG}>
        {'Example'}
      </Typography>
      <Table>
        {tableHead}
        <TableBody>
          {displayRows}
        </TableBody>
      </Table>
    </div>
  )

  const title = `Select the words that ~DON'T~ have the ${tag} ${ipa} sound.`

  return (
    <div className={classes.headspace} >
      <Typography variant='title' gutterBottom>
        {`Four in a row using ${tag} - `}
        <SplitHilite str={ipa} />
      </Typography>
      <Typography variant='subheading'>
        <SplitHilite str={title} />
      </Typography>
      <MemberGate content={display} {...other} />
    </div>
  )
}

export default withStyles(styles)(FourInARow)
