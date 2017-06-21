//const connectionFatory = require('../infra/connectionFactory')
//const ProdutoDao = require('../infra/ProdutoDao')

module.exports = function(app){
    app.get('/produtos', function(req, res){

      /*var mysql = require('mysql')
      var connec = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'caelum',
        database : 'casadocodigo'
      })*/

      const connection = app.infra.connectionFactory()//connectionFatory()
      const produtoDao = new app.infra.ProdutoDao(connection)//ProdutoDao(connection)

/*
      connec.query('SELECT * FROM livros',
        function(err, result, fields){
          res.render('produtos/lista', {lista:result})
      }) */

      produtoDao.lista(function(err,result){
        res.format({
          html: function(){
            res.render('produtos/lista',{lista:result});
          },
          json: function(){
            res.json(result);
          }
        })
      //  res.render('produtos/lista', {lista:result});
      })

      connection.end()
    //res.send('<h1>Listagem de produtos yyy</h1>')
    //res.render('produtos/lista')
  })

  app.get('/produtos/form',(req, res) => {
    res.render('produtos/form')
  })



  app.post('/produtos', (req,res) => {
    const livro = req.body;
    const connection = app.infra.connectionFactory()//connectionFatory()
    const produtos = new app.infra.ProdutoDao(connection)//ProdutoDao(connection)

    req.assert('titulo','Titulo deve ser preenchido').notEmpty();
    req.assert('preco','Preço deve ser número').isFloat();

    var errors = req.validationErrors();

    if(errors){
      console.log('há erros na validação!');
      res.format({
        html: function(){
          res.status(400).render('produtos/form',{errors});
        },
        json: function(){
          res.status(400).send(errors);
        }
      })
      return;
    }


    produtos.salva(livro, (err, result) => {
      //  if(!err)
      //{
        res.redirect('/produtos')
      //}
      //else {
      //  res.render('produtos/sucesso', {livro})
      //}
    })

    //console.log(livro);

  })
}
