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

    it('should add an amphibian', function () {
        return agent.post('/amphibians').expect(302).send({name: 'Test amphibian', description: 'Test description'})
    })

    it('should get add cat page', function () {
        return agent.get('/amphibians/add').expect(200).then(data => {
            data.text.includes('Add an Amphibian').should.be.true()
        })
    })


    it('should get amphibians', function () {
        return agent.get('/amphibians').expect(200).then(data => {
            data.text.includes('Amphibians').should.be.true()
        })
    })

    it('should get an amphibian', function () {
        return agent.get('/amphibians/456').expect(200).then(data => {
            data.text.includes('Amphibian').should.be.true()
        })
    })

    it('should delete an amphibian', function() {
        return agent.get('/amphibians/delete/456').expect(302)
    })

    afterEach('Teardown', function () {
        console.log('Teardown')
        server.close()
        server = undefined
        app = undefined
    })
})
