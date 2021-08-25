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

})
