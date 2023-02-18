import {config} from 'dotenv'
import AnimalRootService from "../../src/services/animals-service.js";
import AnimalService from "../../src/services/animal-service.js";

config()
describe("Animals Service", () => {
    const service = new AnimalRootService(process.env.API_URL)
    const animalService = new AnimalService(process.env.API_URL, "cats")
    animalService.create({name: `Garfield`, description: 'Test description', color: "blue"})
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
        return service.register({type, group:"mammals"}).then((data) => {
            expect(data).toBeTruthy();
        })
    })

    it('should get types', () => {
        return service.types().then((data) => {
            expect(data.length).toBeGreaterThan(0)
        })
    })

    it('should get groups', () => {
        return service.groups().then((data) => {
            expect(data.length).toBeGreaterThan(0)
        })
    })

})
