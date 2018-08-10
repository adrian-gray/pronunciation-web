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
  sentence: {
    padding: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1.2rem'
  },
  correct: {
    textAlign: 'center',
    color: '#AAEEAA'
  },
  greenBG: {
    backgroundColor: '#EEFFEE'
  },
  green: {
    backgroundColor: '#99FF99'
  },
  red: {
    backgroundColor: '#FF9999'
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

class NewsStories extends Component {
  constructor (props) {
    super(props)

    const numSelectors = countSelectors(this.props.sentences)
    this.state = {
      sentences: [],
      selectedOption: Array(numSelectors).fill(0),
      selectedBgColour: Array(numSelectors).fill(undefined)
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.updateSentences(this.state.selectedOption)
  }

  parseSentences (props) {
    let id = 0
    let selectorId = 0

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
              selected={props.selectedOption[selectorId]}
              colour={props.selectedBgColour && props.selectedBgColour[selectorId]}
              handleClick={this.handleClick}
              key={key}
              index={id}
            />
          )
          id++
          selectorId++
          sentence = sentence.substr(6, sentence.length)
        } else {
          const substr = sentence.slice(0, idx)
          fragments.push(<SplitHilite str={substr} key={key} />)
          sentence = sentence.slice(substr.length)
        }
        key++
      } while (sentence.length)

      return (
        <Typography key={index} className={this.props.classes.sentence}>
          {fragments}
        </Typography>
      )
    })

    return { sentences }
  }

  updateSentences (selectedOption, selectedBgColour = null) {
    const { sentences } = this.parseSentences({ selectedOption, selectedBgColour })

    this.setState({ sentences })
  }

  checkForCorrect (values) {
    return values.map((value, index) => {
      return this.props.options[value] === this.props.answers[index]
    })
  }

  handleClick (index) {
    const newStateSelectedOption = this.state.selectedOption.slice()
    const selectedBgColour = []
    newStateSelectedOption[index] = ((this.state.selectedOption[index] + 1)) % 3
    if (newStateSelectedOption.every(val => val > 0)) {
      this.checkForCorrect(newStateSelectedOption).map((value, index) => {
        switch (value) {
          case true:
            selectedBgColour[index] = this.props.classes.green
            break
          case false:
            selectedBgColour[index] = this.props.classes.red
            break
          default:
            selectedBgColour[index] = undefined
        }
      })
    }
    this.setState({
      selectedOption: newStateSelectedOption,
      selectedBgColour
    })
    this.updateSentences(newStateSelectedOption, selectedBgColour)
  }

  render () {
    const { classes, headline, title } = this.props

    return (
      <div className={classes.headspace}>
        <Typography variant='display1' gutterBottom>
          {'News Stories'}
        </Typography>
        <Typography variant='headline' gutterBottom>
          {headline}
        </Typography>
        <Typography variant='subheading' gutterBottom>
          <SplitHilite str={title} />
        </Typography>
        <Paper>
          {this.state.sentences}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(NewsStories)
