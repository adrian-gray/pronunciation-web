import React from 'react'

import { splitHilite } from './../Utils'

export default function PronounceText (props) {
  const { phoneme, arr } = props
  const list = arr.map( (el, i) => <li key={i}>{el}</li>)

  return (
    <div>
      <h3>How to pronounce {splitHilite(phoneme)}</h3>
      <ul>{list}</ul>
    </div>
  )
}
