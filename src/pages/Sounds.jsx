import React from 'react'
import SEO from './../components/SEO'
import data from './../data/data'

const Sounds = () => {
  const phonemes = data.phonemes
  const list = Object.keys(phonemes)
  const links = list.map(phoneme => {
    const title = phonemes[phoneme]['key']
    const link = `/sounds/pronounce_${title}`
    return (
      <li key={phoneme}>
        <a href={link}>
          {title}
        </a>
      </li>
    )
  })

  return (
    <div className='container'>
      <SEO meta='sounds' />
      <h1>Pronunciation</h1>
      <ul>
        {links}
      </ul>
    </div>
  )
}

export default Sounds
