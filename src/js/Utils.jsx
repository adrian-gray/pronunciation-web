import React from 'react'

export function splitHilite (str) {
  const elements = str.split(/(~)/)
  const arr = []
  do {
    let el = elements.shift()
    if (el === '~') {
      arr.push(<span className='em' key={arr.length}>{elements.shift()}</span>)
      elements.shift() // closing ~
    } else {
      arr.push(el)
    }
  } while (elements.length)
  return arr
}
