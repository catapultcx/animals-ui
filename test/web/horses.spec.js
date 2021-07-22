require('should')

const http = require('http')
const request = require('supertest')
const url = 'http://localhost:2999'
const fs = require('fs')
const decache = require('decache')
const Horses = require('../../src/services/horses')
const service = new Horses(process.env.API_URL)
const item = { name: 'Spirit', description: 'Stallion of Cimarron' }

let server
let app
let agent
let created
service.create(item).then((data) => { created = data })

function startServer(done) {
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

  it('should add a horse', function () {
    return agent.post('/horses').expect(302).send({ name: 'Test horse', description: 'Test description' })
  })

  it('should get a horse', function () {
    return agent.get('/horses/' + created.id).expect(200).then(data => {
      data.text.includes('Horse').should.be.true()
    })
  })

  it('should get add horse page', function () {
    return agent.get('/horses/add').expect(200).then(data => {
      data.text.includes('Add a Horse').should.be.true()
    })
  })

  it('should delete a horse', function () {
    return agent.post('/horses').expect(302).send({ id: created.id })
  })


  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})
