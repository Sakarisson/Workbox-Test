module.exports = {
  globDirectory: "./",
  globPatterns: [
    './src/public/*.js'
  ],
  templatedUrls: {
    '/': [
      './src/views/index.pug'
    ],
    '/person/hello': [
      './src/views/person.pug'
    ],
    '/person/\\*': [
      './src/views/person.pug'
    ]
  },
  modifyUrlPrefix: {
    'src/public/': 'public/'
  },
  swDest: './src/sw.js',
  clientsClaim: true,
  skipWaiting: true
}
