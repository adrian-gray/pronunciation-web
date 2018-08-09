import React from 'react'
import { Helmet } from 'react-helmet'

import meta from './../data/meta'

const SEO = (props) => {
  const content = Object.assign({}, meta['default'], meta[props.meta])
  const { canonical, description, title, imageFB, imageTW } = content

  return (
    <Helmet>
      <title>{ title }</title>
      <meta name='description' content={description} />

      <meta property='og:url' content={canonical} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={imageFB} />
      <meta property='og:title' content={title} />
      <meta property='og:image:secure_url' content={imageFB} />
      <meta property='og:description' content={description} />

      <meta name='twitter:site' content={canonical} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content='' />
      <meta name='twitter:image' content={imageTW} />
    </Helmet>
  )
}

export default SEO
