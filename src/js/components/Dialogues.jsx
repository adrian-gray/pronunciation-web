import React from 'react'

import { splitHilite } from './../Utils'

export default function Dialogues (props) {
  function extractLines (dialogue, index) {
    return dialogue.map((line, index) => <li key={index}>{splitHilite(line)}</li>)
  }

  function expandDialogue (dialogue, index) {
    return <ul className='plain-list' key={index}>{extractLines(dialogue)}</ul>
  }

  const lines = props.dialogues.map(expandDialogue)

  return (
    <div className='dialogues'>
      <h3>Short Dialogues</h3>
      {lines}
    </div>
  )
}
