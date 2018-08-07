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

const countSelectors = (arr) => {
  let count = 0
  arr.forEach((sentence) => {
    const num = (sentence.match(/OPTION/g) || []).length
    count += num
  })
  return count
}

class IdentifyTheSounds extends Component {
  constructor (props) {
    super(props)

    const numSelectors = countSelectors(this.props.sentences)
    this.state = {
      selectedOption: Array(numSelectors).fill(0),
      sentences: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.updateSentences(this.state.selectedOption)
  }

  parseSentences (props) {
    let id = 0
    let numSelectors = 0

    const sentences = this.props.sentences.map((sentence, index) => {
      const fragments = []
      let key = 0
      do {
        const idx = sentence.indexOf('OPTION')
        if (idx === -1) {
          fragments.push(sentence)
          break
        } else if (idx === 0) {
          fragments.push(
            <Picker
              options={this.props.options}
              selected={props.selectedOption[numSelectors]}
              handleClick={this.handleClick}
              key={key}
              index={id}
            />
          )
          id++
          numSelectors++
          sentence = sentence.substr(6, sentence.length)
        } else {
          const substr = sentence.slice(0, idx)
          fragments.push(<SplitHilite str={substr} key={key} />)
          sentence = sentence.slice(substr.length)
        }
        key++
      } while (sentence.length)

      return (
        <Paper className={this.props.classes.spacing} key={index}>
          <Typography key={index}>
            {fragments}
          </Typography>
        </Paper>
      )
    })

    return { sentences }
  }

  updateSentences (options) {
    console.log('upated to ', options)
    const { sentences } = this.parseSentences({
      selectedOption: options
    })

    this.setState({ sentences })
  }

  handleClick (index) {
    console.log('clicked picker ', index, ' which is currently ', this.state.selectedOption[index])
    const newStateSelectedOption = this.state.selectedOption.slice()
    newStateSelectedOption[index] = ((this.state.selectedOption[index] + 1)) % 3
    console.log('options', newStateSelectedOption)
    this.setState({
      selectedOption: newStateSelectedOption
    })
    this.updateSentences(newStateSelectedOption)
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
