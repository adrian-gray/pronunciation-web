import React from 'react'

import SplitHilite from './SplitHilite'

export default function Dialogues (props) {
  function extractLines (dialogue, index) {
    return dialogue.map((line, index) => (
      <li key={index}>
        <SplitHilite str={line} />
      </li>
    ))
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
