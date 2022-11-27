import { config } from 'dotenv'
import Animals from '../../src/services/animals.js'

config()
const service = new Animals(process.env.API_URL)
let created

let item = { name: 'Tom', description: 'Friend of Jerry', colour: 'Orange', type: 'MAMMALS' }

//TODO break the dependency on backend to be up and running by using wiremock or superagent mock, tests are undeterministic when run multiple times, as backend is not resetting the state
describe('animals', function () {

  it('create animal', function () {

    return service.create(item).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()
      expect(data.type).toEqual(item.type)
      expect(data.colour).toEqual(item.colour)
      created = data
    })
  })

  it('get animal', function () {
    //TODO break the dependency on 1st test, setup data indenpendently
    return service.get(created.id).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()
      expect(data.type).toEqual(item.type)
      expect(data.colour).toEqual(item.colour)
    })
  })

  it('update animal', function () {

    return service.create(item).then((created) => {
      expect(created.name).toEqual(item.name)
      created.name = 'updated-animal-name'

      return service.update(created.id, created).then((updated) => {
        
        //fetch updated animal and assert
        return service.get(updated.id).then((updateFetched) => {
          expect(updateFetched.name).toEqual('updated-animal-name')
        })
        
      })
      
    })
  })

  it('delete animal', function () {
    //TODO Use async await model for more readability
    service.create(item).then((created) => {

      return service.delete(created.id).then(() => {
      
        //fetch deleted animal and assert
        return service.get().then((deleted) => {
          expect(deleted.id).not.toBeDefined()
        })    
      })
    })
  })

  it('search animals', function async () {
    let animal = item
    animal.name = 'search-animal-1'

    //create two animals
    return service.create(animal).then(() => {

      animal.name = 'animal-2'
      return service.create(animal).then(() => {

        //perform search
        return service.search('search-').then((data) => {
          expect(data.length).toBeGreaterThan(0)
        })
      })
    })
  })

  it('get all animals', function () {
    return service.all().then((data) => {
      expect(data.length).toBeGreaterThan(0)
    })
  })
})
