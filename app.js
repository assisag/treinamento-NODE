const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs')


app.get('/', function(req, res){
  //res.send('<h1>Home</h1>')

  res.render('index')

  console.log('TEEEEE')
})

app.get('/produtos', function(req, res){
  res.send('<h1>Listagem de produtosxxxx</h1>')
})


app.listen(port, function(){
  console.log(`Servidor executando em http://localhost:${port}`)
})
