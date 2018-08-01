import React from 'react'

import SplitHilite from './SplitHilite'

export default function IdentifySounds (props) {
  const sentences = props.sentences.map((sentence, index) => {
    return <p key={index}><SplitHilite str={sentence} /></p>
  })

  return (
    <div>
      {sentences}
    </div>
  )
}
