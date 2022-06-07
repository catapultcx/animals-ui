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
      
      created = data
    })
  })

  it('get a created animal', () =>
    service.get(created.id).then((data) => {
      expect(data.name).toEqual(item.name)
      expect(data.description).toEqual(item.description)
      expect(data.id).toBeDefined()
    })
  )
  
  it('delete a created animal', async () => {
    const createdResult = await service.get(created.id);

    expect(createdResult.name).toEqual(item.name)
    expect(createdResult.description).toEqual(item.description)
    expect(createdResult.id).toBeDefined()

    const deletedResult = await service.del(created.id)
      
    expect(deletedResult).toBeTruthy();
  })

  it('get all animals', () =>
    service.all().then((data) => {
      expect(data.length).toBeGreaterThan(0)
    })
  )
})
