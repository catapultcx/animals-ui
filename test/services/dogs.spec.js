require('dotenv').config()
require('should')

const Dogs = require('../../src/services/dogs')
const service = new Dogs(process.env.API_URL)
let created

describe('dogs', function () {

  it('create a dog', function () {
    let item = { name: 'Spike', description: 'A dog' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created dog', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('get all dogs', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

  it('update a dog', function () {
    let item = { name: 'NewDog', description: 'NewDesc' }
    return service.create(item).then((data) => {
      data.name = 'UpdatedName'
      data.description = 'UpdatedDesc'

      service.update(data.id, data).then((updated) => {
        updated.name.should.eql(data.name)
        updated.description.should.eql(data.description)
        updated.id.should.eql(data.id)
      })
    })
  })

})
