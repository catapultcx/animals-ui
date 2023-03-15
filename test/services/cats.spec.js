import { config } from 'dotenv'
import Cats from '../../src/services/cats.js'

config()
const service = new Cats("http://localhost:8080/api/1")
let created

let item = { name: 'Tom', description: 'Friend of Jerry' }

describe('cats', function () {

  it('get create a cat', function () {

    return service.create(item).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()

      // data.name.should.eql(item.name)
      // data.description.should.eql(item.description)
      // data.should.have.property('id')
      created = data
    })
  })

  it('get a created cat', function () {
    return service.get(created.id).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()

      // data.name.should.eql(data.name)
      // data.id.should.eql(data.id)
      // data.description.should.eql(data.description)
    })
  })

  it('get all cats', function () {
    return service.all().then((data) => {
      expect(data.length).toBeGreaterThan(0)
    })
  })
})
