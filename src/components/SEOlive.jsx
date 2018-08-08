import React from 'react'
import { Helmet } from 'react-helmet'

import meta from './../data/meta'

const SEOlive = (props) => {
  const content = meta['default']
  const description = props.description || content.description
  const title = props.title || content.title

  return (
    <Helmet>
      <title>{ title }</title>
      <meta name='description' content={description} />
    </Helmet>
  )
}

export default SEOlive
