import React from 'react'

import { splitHilite } from './../Utils'

export default function PronounceText (props) {
  const list = props.arr.map( el => <li>{el}</li>)

  return <ul>{list}</ul>
}
