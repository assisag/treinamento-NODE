
const mysql = require('mysql')


function createConnection(){

  let databaseName = 'casadocodigo';
  if(process.env.NODE_ENV == 'test') {
    databaseName = 'casadocodigo_teste';
  }
  // Ou passar o banco na variavel de teste
 //database: process.env.NODE_DB || 'casadocodigo'

  return mysql.createConnection({
    host : process.env.NODE_DB_HOST, //usando variavel de ambiente com dotenv
    user : process.env.NODE_DB_USER,
    password : process.env.NODE_DB_PASS,
    database : process.env.NODE_DB || 'casadocodigo'
  })
}

module.exports = function() {
  return createConnection
};

/*
  module.exports = () => {
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'caelum',
    database : 'casadocodigo'
  })
}
*/
