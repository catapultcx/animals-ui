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

  it('should get crustaceans', function () {
    return agent.get('/crustaceans').expect(200).then(data => {
      data.text.includes('Crustaceans').should.be.true()
    })
  })

  it('should get a crustacean', function () {
    return agent.get('/crustaceans/123').expect(200).then(data => {
      data.text.includes('Crustacean').should.be.true()
    })
  })

  it('should get add crustacean page', function () {
    return agent.get('/crustaceans/add').expect(200).then(data => {
      data.text.includes('Add a Crustacean').should.be.true()
    })
  })

  it('should add a crustacean', function () {
    return agent.post('/crustaceans').expect(302).send({name: 'Test crustacean', description: 'Test description'})
  })

  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})
