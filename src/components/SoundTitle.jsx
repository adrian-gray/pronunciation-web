import React from 'react'

import SplitHilite from './SplitHilite'

export default function SoundTitle (props) {
  const { phoneme, str } = props

  return (
    <div className='title'>
      <h1><SplitHilite str={phoneme} /> - <SplitHilite str={str} /></h1>
    </div>
  )
}
