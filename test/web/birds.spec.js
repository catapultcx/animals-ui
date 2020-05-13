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

  it('should get birds', function () {
    return agent.get('/birds').expect(200).then(data => {
      data.text.includes('Birds').should.be.true()
    })
  })

  it('should get a bird', function () {
    return agent.get('/birds/123').expect(200).then(data => {
      data.text.includes('Bird').should.be.true()
    })
  })

  it('should get add bird page', function () {
    return agent.get('/birds/add').expect(200).then(data => {
      data.text.includes('Add a Bird').should.be.true()
    })
  })

  it('should add a bird', function () {
    return agent.post('/birds').expect(302).send({name: 'Test bird', description: 'Test description'})
  })

  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})
