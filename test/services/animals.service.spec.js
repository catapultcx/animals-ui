import {config} from 'dotenv'
import AnimalRootService from "../../src/services/animals-service.js";

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

    it('should register new types', () => {
        const type = Math.random().toString(36).slice(2, 7); // Creating random type names
        return service.register(type, "mammals").then((data) => {
            expect(data).toBeTruthy();
        })
    })

})
