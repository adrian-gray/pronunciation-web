import React from 'react'

import SplitHilite from './SplitHilite'

export default function Description (props) {
  const { phoneme, arr } = props
  const list = arr.map((el, i) => <li key={i}>{el}</li>)
  const heading = <span>How to pronounce <SplitHilite str={phoneme} /></span>

  return (
    <div className='description'>
      <h3>How to pronounce {heading}</h3>
      <ul>{list}</ul>
    </div>
  )
}
