require('dotenv').config()
require('should')

const Reptiles = require('../../src/services/reptiles')
const service = new Reptiles(process.env.API_URL)
let created

describe('reptiles', function () {

  it('get create a reptile', function () {
    let item = { name: 'Leo', description: 'Leo lizard' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created reptile', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('get all reptiles', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

   it('delete a reptile', function () {
     return service.delete(created.id).then((data) => {
       data.should.be.empty()
     })
   })

})