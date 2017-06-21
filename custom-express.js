const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dotenv = require('dotenv')

module.exports = function(){

  const app = express()
  app.set('view engine', 'ejs')
  app.use(express.static('./public'))
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(expressValidator())

  dotenv.config()

  load('routes').then('infra').into(app)
  //require('./routes/produtos')(app)

  return app;
}
