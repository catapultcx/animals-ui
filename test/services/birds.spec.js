require('dotenv').config()
require('should')

const Birds = require('../../src/services/birds')
const service = new Birds(process.env.API_URL)
let created

describe('birds', function () {

  it('get create a bird', function () {
    let item = { name: 'Tom', description: 'Friend of Jerry' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created bird', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('get all birds', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

  it('update bird', function () {
    created.name.should.eql("Tom")
    created.name = "Tom2"
    return service.update(created).then((data) => {
    data.name.should.eql("Tom2")
    })
  })

  it('delete bird', function () {
    return service.delete(created.id).then((data) => {
      should.not.exist(data)
    })
  })

})
