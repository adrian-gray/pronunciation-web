import React, { Component } from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  largeText: theme.largeText,
  correctBG: theme.correctBG,
  incorrectBG: theme.incorrectBG,
  left: {
    ...theme.subCanvas,
    float: 'left',
    margin: '2rem',
    padding: '1rem'
  },
  clickable: {
    cursor: 'pointer'
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
    const paperClasses = [classes.left]

    let correctStatus = null
    if (this.props.isCorrect) {
      paperClasses.push(classes.correctBG)
    } else if (this.props.isCorrect === false) {
      paperClasses.push(classes.incorrectBG)
    }

    return (
      <div className={classes.clickable} onClick={this.handleClick}>
        <Paper className={paperClasses.join(' ')}>
          <Typography className={classes.largeText}>
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
