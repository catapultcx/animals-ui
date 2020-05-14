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

  it('update cat', function () {
    created.name.should.eql("Tom")
    created.name = "Tom2"
    return service.update(created).then((data) => {
    data.name.should.eql("Tom2")
    })
  })

  it('delete cat', function () {
    return service.delete(created.id).then((data) => {
      should.not.exist(data)
    })
  })

})
