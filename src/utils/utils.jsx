import React from 'react'

export function splitHilite (str) {
  const elements = str.split(/(~)/)
  const arr = []
  do {
    let el = elements.shift()
    if (el === '~') {
      const txt = elements.shift()
      arr.push(<span className='split-em' key={txt}>{txt}</span>)
      elements.shift() // closing ~
    } else {
      arr.push(<span className='split-normal' key={el}>{el}</span>)
    }
  } while (elements.length)
  arr.push(' ')
  return arr
}
