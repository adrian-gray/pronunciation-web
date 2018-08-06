import React, {Component } from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import Tile from './Tile'

const styles = (theme) => ({
  headspace: theme.headspace,
  clearFloat: {
    clear: 'both'
  },
  correct: {
    textAlign: 'center',
    color: 'green'
  },
  greenBG: {
    backgroundColor: '#EEFFEE'
  }
})

class FindTheWords extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isCorrect: Array(props.words.length).fill(undefined),
      wordTiles: [],
      allCorrect: false
    }

    this.checkAllCorrect = this.checkAllCorrect.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  checkAllCorrect (correct) {
    let numRemaining = this.props.correct.length

    for (let i = 0; i < this.props.words.length; i++) {
      if (correct[i] === true) {
        numRemaining--
      } else if (correct[i] === false) {
        return false
      }
    }
    return numRemaining === 0
  }

  handleClick (index) {
    const isCorrect = this.props.correct.includes(this.props.words[index])
    const newStateIsCorrect = this.state.isCorrect.slice()

    let status = this.state.isCorrect[index]
    if (status === undefined) {
      newStateIsCorrect[index] = isCorrect
    } else {
      newStateIsCorrect[index] = undefined
    }

    const allCorrect = this.checkAllCorrect(newStateIsCorrect)
    this.setState({
      isCorrect: newStateIsCorrect,
      allCorrect
    })
  }

  render () {
    const { classes, tag, words } = this.props

    let result = ''
    let resultBG = ''

    if (this.state.allCorrect) {
      result = (
        <Typography className={classes.correct} variant='display3' gutterBottom>
          {'Yes ✓'}
        </Typography>
      )
      resultBG = classes.greenBG
    }

    this.wordTiles = words.map((word, index) => (
      <Tile
        word={word}
        key={index}
        index={index}
        isCorrect={this.state.isCorrect[index]}
        handleClick={this.handleClick}
      />
    ))

    return (
      <div className={classes.headspace}>
        <Typography variant='title' gutterBottom>
          {`Find the words with a ${tag} sound`}
        </Typography>
        <Paper className={resultBG}>
          {this.wordTiles}
          <div className={classes.clearFloat} />
          {result}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(FindTheWords)
