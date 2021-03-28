require('should')

const http = require('http')
const request = require('supertest')
const url = 'http://localhost:2999'
const fs = require('fs')
const decache = require('decache')

let server
let app
let agent

function startServer(done) {
    let port = process.env.PORT || '2998'
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

    it('should add an amphibian', function () {
        return agent.post('/amphibians').expect(302).send({name: 'Test amphibian', description: 'Test description'})
    })
})
