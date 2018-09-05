import React, {Component } from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import MemberGate from './MemberGate'
import SplitHilite from './SplitHilite'
import Tile from './Tile'

const styles = (theme) => ({
  headspace: theme.headspace,
  clearFloat: theme.clearFloat,
  center: theme.center,
  correctBG: theme.correctBG,
  incorrectBG: theme.incorrectBG
})

class FindTheWords extends Component {
  constructor (props) {
    super(props)

    const {...other} = props

    this.state = {
      other,
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
    const { classes, ipa, tag, titleStart, titleEnd, words } = this.props

    let result = ''
    let resultBG = ''

    if (this.state.allCorrect) {
      result = (
        <Typography className={classes.center} variant='display3' gutterBottom>
          {'Yes ✓'}
        </Typography>
      )
      resultBG = classes.correctBG
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

    const display = (
      <Paper className={resultBG}>
        {this.wordTiles}
        <div className={classes.clearFloat} />
        {result}
      </Paper>
    )

    return (
      <div className={classes.headspace}>
        <Typography variant='title' gutterBottom>
          {titleStart}
          <SplitHilite str={ipa} />
          {titleEnd}
        </Typography>
        <Typography>
          {`Find the correct sound. Say the words and select those with the ${tag} sound. Once you get a word, it is replaced with a more challenging word. Can you find all the words before your time runs out? You can click on words to hear the pronunciation. Find the words helps you recognise and pronounce the vowel sounds of common English words.`}
        </Typography>
        <MemberGate content={display} userAuth={this.props.userAuth} {...this.other} />
      </div>
    )
  }
}

export default withStyles(styles)(FindTheWords)
