import { config } from 'dotenv'
import Animals from '../../src/services/animals.js'

config()
const service = new Animals(process.env.API_URL)
let created

let item = { name: 'Tom', description: 'Friend of Jerry' }

describe('animals', function () {

  it('get create a animal', function () {

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

  it('get a created animal', function () {
    return service.get(created.id).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()

      // data.name.should.eql(data.name)
      // data.id.should.eql(data.id)
      // data.description.should.eql(data.description)
    })
  })

  it('get all animals', function () {
    return service.all().then((data) => {
      expect(data.length).toBeGreaterThan(0)
    })
  })
})
