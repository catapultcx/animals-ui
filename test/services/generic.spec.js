import { config } from 'dotenv'
import Generic from '../../src/services/generic.js'

config()
const service = new Generic(process.env.API_URL)
let created

let item = { name: 'Jerry', description: 'Friend of Tom', species: 'Mouse', group: 'MAMMALS' }

describe('generic', function () {

  it('get create an animal', function () {

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

  it('get a created an animal', function () {
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
