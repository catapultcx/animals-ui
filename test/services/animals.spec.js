import { config } from 'dotenv'
import Animals from '../../src/services/animals.js'

config()
const service = new Animals(process.env.API_URL)
let created

let item = { name: 'Tom', description: 'Friend of Jerry', colour: 'Orange', type: 'MAMMALS' }

//TODO break the dependency on backend to be up and running by using wiremock or superagent mock
describe('animals', function () {

  it('get create an animal', function () {

    return service.create(item).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()
      expect(data.type).toEqual(item.type)
      expect(data.colour).toEqual(item.colour)
      created = data
    })
  })

  it('get a created animal', function () {
    //TODO break the dependency on 1st test, setup data indenpendently
    return service.get(created.id).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()
      expect(data.type).toEqual(item.type)
      expect(data.colour).toEqual(item.colour)
    })
  })

  it('get all animals', function () {
    return service.all().then((data) => {
      expect(data.length).toBeGreaterThan(0)
    })
  })
})
