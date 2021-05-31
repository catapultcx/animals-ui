require('dotenv').config()
require('should')

const Insects = require('../../src/services/insects')
const service = new Insects(process.env.API_URL)
let created

describe('insects', function () {

  it('get create an insect', function () {
    let item = { name: 'Jimminy Cricket', description: 'Friend of Pinnochio' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created insect', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('get all insects', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

})
