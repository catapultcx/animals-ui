require('dotenv').config()
require('should')

const Cats = require('../../src/services/cats')
const service = new Cats(process.env.API_URL)
let created

describe('cats', function () {

  it('get create a cat', function () {
    let item = { name: 'Tom', description: 'Friend of Jerry' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created cat', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('get all cats', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

  it('update a cat', function () {
    let item = { name: 'NewCat', description: 'NewDesc' }
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
