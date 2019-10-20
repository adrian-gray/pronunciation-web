// https://github.com/ekalinin/sitemap.js
const sm = require("sitemap");
const fs = require("fs");

const sitemap = sm.createSitemap({
  hostname: "https://pronounceweb.com",
  cacheTime: 600000,
  urls: [
    { url: "/", changefreq: "weekly", priority: 0.5 },
    { url: "/home", changefreq: "weekly", priority: 0.5 },

    // ! short a
    { url: "/sound/short-a", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/short-a/how-to-pronounce",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/short-a/movie", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-a/words", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-a/phrases", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-a/dialogues", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-a/common-words", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/short-a/tongue-twisters",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-a/minimal-pairs",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-a/say-the-sentences",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-a/find-the-words",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-a/missing-sounds",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-a/beginner-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-a/intermediate-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/short-a/words-maze", changefreq: "weekly", priority: 0.5 },

    // ! long a
    { url: "/sound/long-a", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/long-a/how-to-pronounce",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/long-a/movie", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-a/words", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-a/phrases", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-a/dialogues", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-a/common-words", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/long-a/tongue-twisters",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/long-a/minimal-pairs",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/long-a/beginner-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/long-a/intermediate-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/long-a/words-maze", changefreq: "weekly", priority: 0.5 },

    // ! long e
    { url: "/sound/long-e", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/long-e/how-to-pronounce",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/long-e/movie", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-e/words", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-e/phrases", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-e/dialogues", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-e/common-words", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/long-e/tongue-twisters",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/long-e/minimal-pairs", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/long-e/odd-one-out",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/long-e/beginner-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/long-e/intermediate-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/long-e/words-maze", changefreq: "weekly", priority: 0.5 },

    // ! short i
    { url: "/sound/short-i", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/short-i/how-to-pronounce",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/short-i/movie", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-i/words", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-i/phrases", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-i/dialogues", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-i/common-words", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/short-i/tongue-twisters",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-i/minimal-pairs",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-i/beginner-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-i/intermediate-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/short-i/words-maze", changefreq: "weekly", priority: 0.5 },

    // ! long u
    { url: "/sound/long-u", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/long-u/how-to-pronounce",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/long-u/movie", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-u/words", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-u/phrases", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-u/dialogues", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/long-u/common-words", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/long-u/tongue-twisters",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/long-u/minimal-pairs",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/long-u/beginner-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/long-u/intermediate-news-stories",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/long-u/words-maze", changefreq: "weekly", priority: 0.5 },

    // ! short u
    { url: "/sound/short-u", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/short-u/how-to-pronounce",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/short-u/movie", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-u/words", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-u/phrases", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-u/dialogues", changefreq: "weekly", priority: 0.5 },
    { url: "/sound/short-u/common-words", changefreq: "weekly", priority: 0.5 },
    {
      url: "/sound/short-u/tongue-twisters",
      changefreq: "weekly",
      priority: 0.5
    },
    {
      url: "/sound/short-u/minimal-pairs",
      changefreq: "weekly",
      priority: 0.5
    },
    { url: "/sound/short-u/words-maze", changefreq: "weekly", priority: 0.5 }
  ]
});

fs.writeFileSync("./src/assets/sitemap.xml", sitemap.toString());
