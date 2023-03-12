import { config } from 'dotenv'
import Animals from "../../src/services/animals.js";

config()
const service = new Animals(process.env.API_URL)
let created

let item = { name: 'Tom', description: 'Friend of Jerry', group: 'MAMMALS', type: 'Dog', colour: 'Brown' }

describe('animals', function () {

  it('get create an animal', function () {

    return service.create(item).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()
      expect(data.group).toEqual(item.group)
      expect(data.type).toEqual(item.type)
      expect(data.colour).toEqual(item.colour)
      created = data
    })
  })

  it('get a created animal', function () {
    return service.get(created.id).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()
      expect(data.group).toEqual(item.group)
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
