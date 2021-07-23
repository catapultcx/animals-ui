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

  it('edit a created cat', function () {
    created.name = 'Test'
    return service.update(created).then(() => {
      return service.get(created.id).then((data) => {
        data.name.should.eql(created.name)
      })
    })
  })

  it('edit a created cat should return error when name is null', function () {
    created.name = null
    return service.update(created).catch((error) => {
      error.status.should.eql(400)
    }).finally(() => {
        service.get(created.id).then((data) => {
        created = data
      })
    })
  })

  it('edit a created cat should return error when name is empty', function () {
    created.name = ''
    return service.update(created).catch((error) => {
      error.status.should.eql(400)
    }).finally(() => {
        service.get(created.id).then((data) => {
        created = data
      })
    })
  })

  it('edit a created cat should return error when description is null', function () {
    created.description = null
    return service.update(created).catch((error) => {
      error.status.should.eql(400)
    }).finally(() => {
        service.get(created.id).then((data) => {
        created = data
      })
    })
  })

  it('edit a created cat should return error when description is empty', function () {
    created.description = ''
    return service.update(created).catch((error) => {
      error.status.should.eql(400)
    }).finally(() => {
        service.get(created.id).then((data) => {
        created = data
      })
    })
  })

})
