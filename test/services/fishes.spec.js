require('dotenv').config()
require('should')

const Fishes = require('../../src/services/fishes')
const service = new Fishes(process.env.API_URL)
let created

describe('fishes', function () {

  it('get create a fish', function () {
    let item = { name: 'Nemo', description: 'Friend of Dory' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created fish', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('update a fish', function () {
    return service.update(created.id, created).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(created.id)
      data.description.should.eql(data.description)
    })
  })

  it('delete a fish', function () {
    return service.delete(created.id).then((data) => {
      data.should.eql({});
    })
  })

  it('get all fishes', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

})
