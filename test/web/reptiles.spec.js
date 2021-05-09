require('should')

const http = require('http')
const request = require('supertest')
const url = 'http://localhost:2999'
const fs = require('fs')
const decache = require('decache')

let server
let app
let agent

function startServer (done) {
  let port = process.env.PORT || '2999'
  app = require('../../src/app')
  decache('../../src/app')
  app.set('port', port)
  server = http.createServer(app)
  server.listen(port)
  server.on('listening', () => {
    agent = request.agent(server)
    done()
  })
  server.on('error', (error) => {
    console.log(error)
  })
}

describe('/', function () {

  beforeEach('Setup', function (done) {
    startServer(done)
  })

  it('should get reptiles', function () {
    return agent.get('/reptiles').expect(200).then(data => {
      data.text.includes('Reptiles').should.be.true()
    })
  })

  it('should get a reptile', function () {
    return agent.get('/reptiles/123').expect(200).then(data => {
      data.text.includes('Reptile').should.be.true()
    })
  })

  it('should get add reptile page', function () {
    return agent.get('/reptiles/add').expect(200).then(data => {
      data.text.includes('Add a Reptile').should.be.true()
    })
  })

   it('should delete a reptile', function () {
      return agent.get('/reptiles/delete/123').then(data => {
         data.text.includes('Reptiles').should.be.true()
      })
   })

   it('should edit a reptile', function () {
      return agent.post('/reptiles/123').send({name: 'Test reptile 2', description: 'Test description'}).then(data => {
           data.text.includes('Reptiles').should.be.true()
      })
   })

  it('should add a reptile', function () {
    return agent.post('/reptiles').expect(302).send({name: 'Test reptile', description: 'Test description'})
  })

  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})

