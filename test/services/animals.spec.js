import { config } from 'dotenv'
import Animals from '../../src/services/animals.js'

config()
const service = new Animals("http://localhost:8080/api/1")
let created

let animal = { name: 'Carey', description: 'a caring cow', color: 'brown', type: 'MAMMALS' }
let update = { name: 'scarey', description: 'a scary snake', color: 'dark', type: 'REPTILES' }

describe('animals', function () {

  it('post create an animal', function () {

    return service.create(animal).then((data) => {
      expect(data.id).toBeDefined()
      expect(data.name).toEqual(animal.name)
      expect(data.description).toEqual(animal.description)
      expect(data.color).toEqual(animal.color)
      expect(data.type).toEqual(animal.type)

      created = data
    })
  })

  it('get a created animal', function () {
    return service.get(created.id).then((data) => {
      expect(data.name).toEqual(animal.name)
      expect(data.description).toEqual(animal.description)
      expect(data.id).toBeDefined()
      expect(data.color).toEqual(animal.color)
      expect(data.type).toEqual(animal.type)
    })
  })

  it('get all animals', function () {
    return service.all().then((data) => {
      expect(data.length).toBeGreaterThan(0)
    })
  })

  it('update an animal', function () {
    service.update(created.id, update).then(() => {
    service.get(created.id).then((data) => {
      expect(data.name).toEqual(update.name)
      expect(data.description).toEqual(update.description)
      expect(data.color).toEqual(update.color)
      expect(data.type).toEqual(update.type)
      })
    })
  })

  it('delete an animal', function () {
    return service.delete()
    .end
  })

  it('filter animals by name, color, desc, type', function () {
    return service.filter(created).then((data) => {
      expect(data.length).toBeGreaterThan(0)
    })
  })

})
