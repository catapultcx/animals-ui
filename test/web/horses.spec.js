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

  it('should get horses', function () {
    return agent.get('/horses').expect(200).then(data => {
      data.text.includes('Horses').should.be.true()
    })
  })

  it('should get add horse page', function () {
    return agent.get('/horses/add').expect(200).then(data => {
      data.text.includes('Add a Horse').should.be.true()
    })
  })

  it('should add a horse', function () {
    return agent.post('/horses').expect(302).send({name: 'Black Beauty', description: 'its Beauty'})
  })

  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})
