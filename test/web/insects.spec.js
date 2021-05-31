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

  it('should get insects', function () {
    return agent.get('/insects').expect(200).then(data => {
      data.text.includes('Insects').should.be.true()
    })
  })

  it('should get an insect', function () {
    return agent.get('/insects/123').expect(200).then(data => {
      data.text.includes('Insect').should.be.true()
    })
  })

  it('should get add insect page', function () {
    return agent.get('/insects/add').expect(200).then(data => {
      data.text.includes('Add an Insect').should.be.true()
    })
  })

  it('should add an insect', function () {
    return agent.post('/insects').expect(302).send({name: 'Test insect', description: 'Test description'})
  })

  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})
