import React from 'react'

import { splitHilite } from './../Utils'

export default function SoundTitle (props) {
  const { phoneme, str } = props

  return (
    <div className='title'>
      <h1>{splitHilite(phoneme)} - {splitHilite(str)}</h1>
    </div>
  )
}
