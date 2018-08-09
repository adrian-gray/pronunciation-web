// https://github.com/ekalinin/sitemap.js
const sm = require('sitemap')
const fs = require('fs')

const sitemap = sm.createSitemap({
  hostname: 'https://pronounceweb.com',
  cacheTime: 600000,
  urls: [
    { url: '/sounds/' },
    { url: '/sound/æ', changefreq: 'daily', priority: 0.7 },
    { url: '/sound/æ/how_to_pronounce', changefreq: 'weekly', priority: 0.5 }
  ]
})

fs.writeFileSync('./src/sitemap.xml', sitemap.toString())
