import React from 'react'

export default function SaySentences (props) {
  const sentences = props.sentences.map((sentence, index) => {
    return <li key={index}>{`‘${sentence}’`}</li>
  })

  return (
    <ol>
      {sentences}
    </ol>
  )
}
