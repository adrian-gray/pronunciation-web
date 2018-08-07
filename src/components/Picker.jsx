import React, { Component } from 'react'

import {
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  clickable: {
    cursor: 'pointer'
  },
  correct: {
    backgroundColor: '#CCFFCC'
  },
  incorrect: {
    backgroundColor: '#FFCCCC'
  }
})

class Picker extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.handleClick(this.props.index)
  }

  render () {
    return (
      <span onClick={this.handleClick}>
        {`( ${this.props.options[this.props.selected]} )`}
      </span>
    )
  }
}

export default withStyles(styles)(Picker)
