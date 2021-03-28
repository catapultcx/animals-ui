require('dotenv').config()
require('should')

const Amphibians = require('../../src/services/amphibians')
const service = new Amphibians(process.env.API_URL)
let created

describe('cats', function () {
    it('create an amphibian', function () {
        let item = {name: 'Test Amphibian', description: 'An amphibian that tests'}
        return service.create(item).then((data) => {
            data.name.should.eql(item.name)
            data.description.should.eql(item.description)
            data.should.have.property('id')
            created = data

        })
    })

    it('get all amphibians', function () {
        return service.all().then((data) => {
            data.should.have.property('length')
        })
    })
    it('get a created amphibian', function () {
        return service.get(created.id).then((data) => {
            data.name.should.eql(data.name)
            data.id.should.eql(data.id)
            data.description.should.eql(data.description)
        })
    })
})
