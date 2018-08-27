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
  center: theme.center,
  cell: theme.cell,
  headBG: {
    background: '#EEE'
  },
  selectedBG: {
    background: '#CCC'
  }
})

class FourInARow extends React.Component {
  constructor (props) {
    super(props)

    const { classes, userAuth, ...other } = props
    const title = `Select the words that ~DON'T~ have the ${props.tag} ${props.ipa} sound.`

    this.state = {
      classes,
      selected: new Array(props.rows.length).fill(-1),
      title,
      userAuth: userAuth,
      other
    }

    this.buildTable = this.buildTable.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.userAuth !== this.state.userAuth) {
      this.setState({ userAuth: nextProps.userAuth })
      return true
    }
    if (nextState.selected !== this.state.selected) {
      return true
    }
    return false
  }

  buildTable () {
    const displayRows = this.props.rows.map((arr, row) => {
      const cells = arr.map((word, column) => {
        const isSelected = this.state.selected[row] === column
        return (
          <Cell
            str={word}
            column={column}
            row={row}
            key={column}
            handleClick={this.handleClick}
            hilite={isSelected}
            {...this.state.other}
          />
        )
      })
      return (
        <TableRow key={row}>
          {cells}
        </TableRow>
      )
    })

    const guide = this.props.example.map((word, i) => (
      <Cell str={word} key={i} hilite={i + 1 === this.props.exampleHilite} {...this.state.other} />)
    )
    const tableHead = (
      <TableHead className={this.state.classes.headBG}>
        <TableRow>
          {guide}
        </TableRow>
      </TableHead>
    )

    const exHeadClass = `${this.state.classes.headBG} ${this.state.classes.center}`
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

  handleClick (params) {
    const { column, row, str } = params
    const arr = this.state.selected.slice()
    arr[row] = column
    this.setState({ selected: arr })

    // If aray filled in, check for correct
    if (this.props.correct.includes(str)) {
      console.log('correct')
    } else {
      console.log('nope')
    }
  }

  render () {
    const content = this.buildTable()

    return (
      <div className={this.state.classes.headspace} >
        <Typography variant='title' gutterBottom>
          {`Four in a row using ${this.props.tag} - `}
          <SplitHilite str={this.props.ipa} />
        </Typography>
        <Typography variant='subheading'>
          <SplitHilite str={this.state.title} />
        </Typography>
        <MemberGate content={content} userAuth={this.state.userAuth} {...this.state.other} />
      </div>
    )
  }
}

export default withStyles(styles)(FourInARow)
