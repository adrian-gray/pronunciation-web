import React from 'react'
import SplitHilite from './SplitHilite'

export default function CommonWords (props) {
  const words = props.words.map((el, index) => {
    return (
      <div className='col' key={index}>
        <p><SplitHilite str={el} key={el} /></p>
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
