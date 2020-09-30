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

  it('should get fishes', function () {
    return agent.get('/fishes').expect(200).then(data => {
      data.text.includes('Fishes').should.be.true()
    })
  })

  it('should get a fish', function () {
    return agent.get('/fishes/123').expect(200).then(data => {
      data.text.includes('Fish').should.be.true()
    })
  })

  it('should get add fish page', function () {
    return agent.get('/fishes/add').expect(200).then(data => {
      data.text.includes('Add a Fish').should.be.true()
    })
  })

  it('should add a fish', function () {
    return agent.post('/fishes').expect(302).send({name: 'Test fish', description: 'Test description'})
  })

  it('should update a fish', function () {
    return agent.post('/fishes/edit/123').expect(302).send({name: 'Test fish editted', description: 'Test description eddited'})
  })

  it('should delete a fish', function () {
    return agent.post('/fishes/remove/123').expect(302)
  })

  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})
