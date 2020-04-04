const express = require('express')
const consola = require('consola')
const axios = require('axios')
const { Nuxt, Builder } = require('nuxt')

const app = express()


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'


async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Ajout d'un élément
  app.get('/api/test', (req, res) =>{
    let requete = 'SELECT * FROM classement'
    db.query(requete, (err, result) => {
      if(err) throw err;
      res.send('Traitement effectué..')
    })
  })


  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
