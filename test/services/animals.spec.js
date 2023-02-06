import { config } from 'dotenv'
import Animals from '../../src/services/animals.js'

config()
const service = new Animals(process.env.API_URL)
let created

let item = { name: 'Tom', type:'Cat', color:"Brown", description: 'Friend of Jerry' }

describe('animals', function () {

  it('get create a animal', function () {

    return service.create(item).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.type).toEqual(item.type)
      expect(data.color).toEqual(item.color)
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
      expect(data.type).toEqual(item.type)
      expect(data.color).toEqual(item.color)
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

  it('update a created animal', function () {
    let itemToUpdate = { id:created.id, name: 'Bravo', type:'Dog', color:"Brown", description: 'Friend of Jerry' }
    return service.update(itemToUpdate).then((data) => {
      expect(data).toEqual({})
    })
  })

  it('get an updated animal', function () {
    return service.get(created.id).then((data) => {
      expect(data.name).toEqual('Bravo')
      expect(data.type).toEqual('Dog')
      expect(data.color).toEqual('Brown')
      expect(data.description).toEqual('Friend of Jerry')
      expect(data.id).toBeDefined()
    })
  })

  it('filter an animal', function () {
    return service.filter('Garfield', 'Cat', 'Grey','Lazy cat').then((data) => {
      expect(data.length).toBeGreaterThan(0)
      expect(data[0].name).toEqual('Garfield')
      expect(data[0].type).toEqual('Cat')
      expect(data[0].color).toEqual('Grey')
      expect(data[0].description).toEqual('Lazy cat')
    })
  })

  it('delete a created animal', function () {
    let itemToUpdate = { id:created.id, name: 'Bravo', type:'Dog', color:"Brown", description: 'Friend of Jerry' }
    return service.delete(created.id).then((data) => {
      expect(data).toEqual({})
    })
  })

  it('filter a created animal', function () {
    let itemToUpdate = { id:created.id, name: 'Bravo', type:'Dog', color:"Brown", description: 'Friend of Jerry' }
    return service.delete(created.id).then((data) => {
      expect(data).toEqual({})
    })
  })

})
