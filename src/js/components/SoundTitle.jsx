import React from 'react'

import { splitHilite } from './../Utils'

export default function SoundTitle (props) {
  const { phoneme, str } = props

  return <h1>{splitHilite(phoneme)} - {splitHilite(str)}</h1>
}
