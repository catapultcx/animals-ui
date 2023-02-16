import {config} from 'dotenv'
import AnimalRootService from "../../src/services/animal-root-service.js";

config()
describe("Animals Root", () => {
    const service = new AnimalRootService(process.env.API_URL)

    const filterCases = [
        {types: "cat"},
        {types: "cat", names:"Garfield"}
    ];
    it.each(filterCases)(` should filter %s`, function (filters) {
        return service.filter(filters).then((data) => {
            expect(data.length).toBeGreaterThan(0)
        })
    })

})
