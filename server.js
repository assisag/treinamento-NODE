const app = require('./custom-express.js')()

app.listen(3000, function() {
  console.log('Servidor executando...')
})
