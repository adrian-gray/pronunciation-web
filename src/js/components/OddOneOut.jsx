import React from 'react'

export default function OddOneOut (props) {
  const words = props.words.map((word, index) => {
    return <div key={index} className='col'>{word}</div>
  })

  return (
    <div className='container'>
      <div className='row'>
        {words}
      </div>
    </div>
  )
}
