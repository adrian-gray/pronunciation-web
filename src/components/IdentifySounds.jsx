import React from 'react'

import { splitHilite } from './../Utils'

export default function IdentifySounds (props) {
  const sentences = props.sentences.map((sentence, index) => {
    return <p key={index}>{splitHilite(sentence)}</p>
  })

  return (
    <div>
      {sentences}
    </div>
  )
}
