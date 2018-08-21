// https://github.com/ekalinin/sitemap.js
const sm = require('sitemap')
const fs = require('fs')

const sitemap = sm.createSitemap({
  hostname: 'https://pronounceweb.com',
  cacheTime: 600000,
  urls: [
    { url: '/sounds/' },

    { url: '/sound/short-a', changefreq: 'daily', priority: 0.7 },

    { url: '/sound/short-a/how-to-pronounce', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/movie', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/words', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/phrases', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/dialogues', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/common-words', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/tongue-twisters', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/minimal-pairs', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/find-the-words', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/say-the-sentences', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/odd-one-out', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/beginner-news-stories', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/short-a/words-maze', changefreq: 'weekly', priority: 0.5 },

    { url: '/sound/long-e/how-to-pronounce', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/movie', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/words', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/phrases', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/dialogues', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/common-words', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/tongue-twisters', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/minimal-pairs', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/beginner-news-stories', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/intermediate-news-stories', changefreq: 'weekly', priority: 0.5 },
    { url: '/sound/long-e/words-maze', changefreq: 'weekly', priority: 0.5 }
  ]
})

fs.writeFileSync('./src/assets/sitemap.xml', sitemap.toString())
