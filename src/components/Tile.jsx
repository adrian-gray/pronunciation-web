import React, { Component } from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  largeText: theme.largeText,
  left: {
    ...theme.subCanvas,
    float: 'left',
    margin: '2rem',
    padding: '1rem'
  },
  clickable: {
    cursor: 'pointer'
  },
  correct: {
    color: 'green'
  },
  incorrect: {
    color: 'red'
  }
})

class Tile extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.handleClick(this.props.index)
  }

  render () {
    const { classes } = this.props
    let correctStatus = null
    if (this.props.isCorrect) {
      correctStatus = 'correct'
    } else if (this.props.isCorrect === false) {
      correctStatus = 'incorrect'
    }

    return (
      <div className={classes.clickable} onClick={this.handleClick}>
        <Paper className={classes.left}>
          <Typography className={classes.largeText} gutterBottom>
            <span className={classes[correctStatus]}>
              {this.props.word}
            </span>
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Tile)
