import {config} from 'dotenv'
import AnimalService from "../../src/services/animal-service.js";
import {supportedAnimalTypes} from "../test-config.js";

config()
describe.each(supportedAnimalTypes)("Running %s", (type) => {
    const service = new AnimalService(process.env.API_URL, `${type}s`)
    let created

    let item = {name: 'Tom', description: 'Friend of Jerry', color: "blue"}


    it(`get create a ${type}`, function () {

        return service.create(item).then((data) => {
            expect(data.name).toEqual(item.name)
            expect(data.description).toEqual(item.description)
            expect(data.id).toBeDefined()
            created = data
        })
    })

    it(`get a created ${type}`, function () {
        return service.get(created.id).then((data) => {
            expect(data.name).toEqual(item.name)
            expect(data.description).toEqual(item.description)
            expect(data.id).toBeDefined()
        })
    })

    it(`get all ${type}s`, function () {
        return service.all().then((data) => {
            expect(data.length).toBeGreaterThan(0)
        })
    })

    it(`delete ${type}`, function () {
        return service.delete(created.id).then((data) => {
            expect(data).toBe(created.id)
        })
    })
})
