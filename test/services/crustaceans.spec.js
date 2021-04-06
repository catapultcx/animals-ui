require('dotenv').config()
require('should')

const Crustaceans = require('../../src/services/crustaceans')
const service = new Crustaceans(process.env.API_URL)
let created

describe('crustaceans', function () {

  it('get create a crustacean', function () {
    let item = { name: 'Tom', description: 'Friend of Jerry' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created crustacean', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('get all crustaceans', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

})
