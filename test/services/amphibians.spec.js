require('dotenv').config()
require('should')

const Amphibians = require('../../src/services/amphibians')
const service = new Amphibians(process.env.API_URL)

describe('cats', function () {
    it('create an amphibian', function () {
        let item = {name: 'Test Amphibian', description: 'An amphibian that tests'}
        return service.create(item).then((data) => {
            data.name.should.eql(item.name)
            data.description.should.eql(item.description)
            data.should.have.property('id')
        })
    })
})
