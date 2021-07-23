require('dotenv').config()
require('should')

const Horses = require('../../src/services/horses')
const service = new Horses(process.env.API_URL)
let created

describe('horses', function () {

  it('get create a horse', function () {
    let item = { name: 'Spirit', description: 'Stallion of Cimarron' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created horse', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('get create a horse should return error when name is null', function () {
    let item = { description: 'Stallion of Cimarron' }
    return service.create(item).catch((error) => {
      error.status.should.eql(400)
    })
  })

  it('get create a horse should return error when name is empty', function () {
    let item = { name: '', description: 'Stallion of Cimarron' }
    return service.create(item).catch((error) => {
      error.status.should.eql(400)
    })
  })

  it('get create a horse should return error when description is null', function () {
    let item = { name: 'Spirit' }
    return service.create(item).catch((error) => {
      error.status.should.eql(400)
    })
  })

  it('get create a horse should return error when description is empty', function () {
    let item = { name: 'Spirit', description: '' }
    return service.create(item).catch((error) => {
      error.status.should.eql(400)
    })
  })

  it('get all horses', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

  it('get a created horse should return error when created id is invalid', function () {
    return service.get(1).catch((error) => {
      error.status.should.eql(404)
    })
  })

  it('edit a created horse', function () {
    created.name = 'Test'
    return service.update(created).then(() => {
      return service.get(created.id).then((data) => {
        data.name.should.eql(created.name)
      })
    })
  })

  it('edit a created horse should return error when name is null', function () {
    created.name = null
    return service.update(created).catch((error) => {
      error.status.should.eql(400)
    }).finally(() => {
        service.get(created.id).then((data) => {
        created = data
      })
    })
  })

  it('edit a created horse should return error when name is empty', function () {
    created.name = ''
    return service.update(created).catch((error) => {
      error.status.should.eql(400)
    }).finally(() => {
        service.get(created.id).then((data) => {
        created = data
      })
    })
  })

  it('edit a created horse should return error when description is null', function () {
    created.description = null
    return service.update(created).catch((error) => {
      error.status.should.eql(400)
    }).finally(() => {
        service.get(created.id).then((data) => {
        created = data
      })
    })
  })

  it('edit a created horse should return error when description is empty', function () {
    created.description = ''
    return service.update(created).catch((error) => {
      error.status.should.eql(400)
    }).finally(() => {
        service.get(created.id).then((data) => {
        created = data
      })
    })
  })

  it('delete a created horse', function () {
    return service.delete(created.id).then(() => {
      return service.get(created.id).catch((error) => {
        error.status.should.eql(404)
      })
    })
  })

})
