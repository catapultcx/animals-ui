import {config} from 'dotenv'
import Cats from '../../src/services/cats.js'

config()
const service = new Cats(process.env.API_URL)
let created

let item = {name: 'Tom', description: 'Friend of Jerry', type: 'Cat', colour: 'Grey-ish'}

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
        return service.get(created.id).then((data) => {
            expect(data.name).toEqual(item.name)
            expect(data.description).toEqual(item.description)
            expect(data.type).toEqual(item.type)
            expect(data.colour).toEqual(item.colour)
            expect(data.id).toBeDefined()
        })
    })

    it('get all animals', function () {
        return service.all().then((data) => {
            expect(data.length).toBeGreaterThan(0)
        })
    })

    // it('remove an animal', function () {
    //     return service.all().then((before) => {
    //         console.log(before)
    //         service.del(created.id).then(() => {
    //             service.all().then((after) => {
    //                 console.log(after)
    //                 expect(after.length).toBeLessThan(before.length)
    //             })
    //         })
    //     })
    // })

})
