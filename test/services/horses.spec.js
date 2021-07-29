require('dotenv').config()
require('should')

const Horses = require('../../src/services/horses')
const service = new Horses(process.env.API_URL)
let created

describe('horses', function () {

    it('create a horse', function () {
        let item = { name: 'Robin', description: 'the unicorn' }
        return service.create(item).then((data) => {
            data.name.should.eql(item.name)
            data.description.should.eql(item.description)
            data.should.have.property('id')
            created = data
        })
    })

    it('get a created horse', function () {
        return service.get(created.id).then((data) => {
            data.name.should.eql(data.name)
            data.id.should.eql(data.id)
            data.description.should.eql(data.description)
        })
    })

    it('get all horses', function () {
        return service.all().then((data) => {
            data.should.have.property('length')
        })
    })

    it('delete a created horse', function () {
        return service.delete(created.id).then((data) => {
            data.name.should.eql(data.name)
            data.id.should.eql(data.id)
            data.description.should.eql(data.description)
        })
    })

})
