import React, { Component } from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import SplitHilite from './SplitHilite'
import Picker from './Picker'

const styles = (theme) => ({
  headspace: theme.headspace,
  spacing: {
    padding: '1rem',
    margin: '1rem'
  },
  correct: {
    textAlign: 'center',
    color: 'green'
  },
  greenBG: {
    backgroundColor: '#EEFFEE'
  }
})

const parseSentences = (props) => {
  const { classes, sentences, handleClick, options } = props
  const selectedOption = []

  let id = 0
  let numSelectors = 0

  const sentenceList = sentences.map((sentence, index) => {
    const fragments = []
    let key = 0
    do {
      const idx = sentence.indexOf('OPTION')
      if (idx === -1) {
        break
      } else if (idx === 0) {
        selectedOption[numSelectors] = 0
        fragments.push(
          <Picker
            options={options}
            selected={selectedOption[numSelectors]}
            handleClick={handleClick}
            key={key}
            index={id}
          />
        )
        numSelectors++
        id++
        sentence = sentence.substr(6, sentence.length)
      } else {
        const substr = sentence.slice(0, idx)
        fragments.push(<SplitHilite str={substr} key={key} />)
        sentence = sentence.slice(substr.length)
      }
      key++
    } while (sentence.length)

    return (
      <Paper className={classes.spacing} key={index}>
        <Typography key={index}>
          {fragments}
        </Typography>
      </Paper>
    )
  })

  return { sentences: sentenceList, selectedOption }
}

class IdentifyTheSounds extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    const { sentences, selectedOption } = parseSentences({
      classes: props.classes,
      sentences: props.sentences,
      handleClick: this.handleClick,
      options: this.props.options
    })

    this.state = {
      selectedOption,
      sentences
    }
  }

  handleClick (index) {
    const newStateSelectedOption = this.state.selectedOption.slice()
    newStateSelectedOption[index] = 3 % (index + 1)
    console.log('options', newStateSelectedOption)
    this.setState({ 
      selectedOption: newStateSelectedOption
    })
  }

  render () {
    const { classes, headline, title } = this.props

    return (
      <div className={classes.headspace}>
        <Typography variant='display1' gutterBottom>
          {headline}
        </Typography>
        <Typography variant='title' gutterBottom>
          <SplitHilite str={title} />
        </Typography>
        {this.state.sentences}
      </div>
    )
  }
}

export default withStyles(styles)(IdentifyTheSounds)
