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

  it('should add a dog', function () {
    return agent.post('/dogs').expect(302).send({name: 'Test dog', description: 'Test description'})
  })

  it('should get add dog page', function () {
    return agent.get('/dogs/add').expect(200).then(data => {
      data.text.includes('Add a Dog').should.be.true()
    })
  })

  it('should get dogs', function () {
    return agent.get('/dogs').expect(200).then(data => {
      data.text.includes('Dogs').should.be.true()
    })
  })

  it('should get a dog', function () {
    return agent.get('/dogs/123').expect(200).then(data => {
      data.text.includes('Dog').should.be.true()
    })
  })

  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})
