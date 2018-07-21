import React from 'react'

import { splitHilite } from './../utils/utils'

export default function CommonWords (props) {
  const words = props.words.map((el, index) => {
    return (
      <div className='col' key={index}>
        <p>{splitHilite(el)}</p>
      </div>
    )
  })

  return (
    <div className='container common-words'>
      <div className='row'>
        {words}
      </div>
    </div>
  )
}
