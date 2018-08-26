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
  center: {
    textAlign: 'center'
  },
  cell: theme.cell,
  headBG: {
    background: '#DDD'
  }
})

class FourInARow extends React.Component {
  constructor (props) {
    const other = {...props}

    super(props)

    const title = `Select the words that ~DON'T~ have the ${props.tag} ${props.ipa} sound.`

    this.state = {
      title,
      display: null,
      other
    }

    this.buildTable = this.buildTable.bind(this)
  }

  componentDidMount () {
    this.setState({ display: this.buildTable() })
  }

  buildTable () {
    const displayRows = this.props.rows.map((row, key) => {
      const cells = row.map((word, i) => (
        <Cell str={word} key={i} {...this.state.other} />)
      )
      return (
        <TableRow key={key}>
          {cells}
        </TableRow>
      )
    })

    const guide = this.props.example.map((word, i) => (
      <Cell str={word} key={i} {...this.state.other} />)
    )
    const tableHead = (
      <TableHead className={this.props.classes.headBG}>
        <TableRow>
          {guide}
        </TableRow>
      </TableHead>
    )

    const exHeadClass = `${this.props.classes.headBG} ${this.props.classes.center}`
    return (
      <div>
        <Typography variant='display1' className={exHeadClass}>
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
  }

  render () {
    return (
      <div className={this.props.classes.headspace} >
        <Typography variant='title' gutterBottom>
          {`Four in a row using ${this.props.tag} - `}
          <SplitHilite str={this.props.ipa} />
        </Typography>
        <Typography variant='subheading'>
          <SplitHilite str={this.state.title} />
        </Typography>
        <MemberGate content={this.state.display} userAuth={this.props.userAuth} {...this.state.other} />
      </div>
    )
  }
}

export default withStyles(styles)(FourInARow)
