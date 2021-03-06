const express = require('../../custom-express')();
const request = require('supertest')(express);

describe('#ProdutosController', () => {
  it('listagem de produtos json', function(done){
    request.get('/produtos')
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200,done)
  })

  it('listagem de produtos html', (done) =>{
    request.get('/produtos')
    .expect('Content-type', /html/)
    .expect(200,done)
  })

})
