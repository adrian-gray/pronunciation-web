import React from 'react'

import { splitHilite } from './../Utils'

export default function Description (props) {
  const { phoneme, arr } = props
  const list = arr.map((el, i) => <li key={i}>{el}</li>)

  return (
    <div className='description'>
      <h3>How to pronounce {splitHilite(phoneme)}</h3>
      <ul>{list}</ul>
    </div>
  )
}
