import React from 'react'

import {
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  splitEm: {
    color: '#8b0000'
  },
  splitNormal: {
    color: 'black'
  }
})

export function SplitHilite (props) {
  const { classes, str } = props
  const elements = str.split(/(~)/)

  const arr = []
  do {
    let el = elements.shift()
    if (el === '~') {
      const txt = elements.shift()
      arr.push(<span className={classes.splitEm} key={txt}>{txt}</span>)
      elements.shift() // closing ~
    } else {
      arr.push(<span className={classes.splitNormal} key={el}>{el}</span>)
    }
  } while (elements.length)
  arr.push(' ')

  return arr
}

export default withStyles(styles)(SplitHilite)
