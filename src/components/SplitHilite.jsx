import React from 'react'

import {
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  em: {
    color: '#8b0000'
  }
})

export function SplitHilite (props) {
  const { classes, str } = props
  const elements = str.split(/(~)/)

  const arr = []
  let index = 0
  do {
    let el = elements.shift()
    if (el === '~') {
      const txt = elements.shift()
      arr.push(<span className={classes.em} key={`${txt}${index}`}>{txt}</span>)
      elements.shift() // closing ~
    } else {
      arr.push(<span key={`${el}${index}`}>{el}</span>)
    }
    index++
  } while (elements.length)
  arr.push(' ')

  return arr
}

export default withStyles(styles)(SplitHilite)
