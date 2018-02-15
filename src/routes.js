const path = require('path')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/person/:name', (req, res) => {
    res.render('person', {
      name: req.params.name
    })
  })

  app.get('/workbox-sw.prod.v2.1.2.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/workbox-sw.prod.v2.1.2.js'))
  })

  app.get('/sw.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'sw.js'))
  })

  app.get('/public/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.js'))
  })
}
