import request from 'supertest'
import app from '../../src/app'
import {supportedAnimalTypes} from "../test-config.js";
import AnimalService from "../../src/services/animal-service.js";

describe.each(supportedAnimalTypes)(`/%ss`, function (type) {
    const name = type.charAt(0).toUpperCase() + type.slice(1);
    const service = new AnimalService(process.env.API_URL, `${type}s`)
    it(`should get ${type}s`, function () {
        return request(app)
            .get(`/${type}s`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`${name}s`)
            })
    })

    it(`should delete a ${type}`, async function () {
        const item = {name: 'Tom', description: 'Friend of Jerry', color: "blue"}
        const created = await service.create(item);
        return request(app)
            .get(`/${type}s/${created.id}/delete`)
            .expect(302)
            .then(data => {
                expect(data.text).toContain(`Found. Redirecting to /${type}s`)
            })
    })

    it(`should redirect delete to loc`, async function () {
        const item = {name: 'Tom', description: 'Friend of Jerry', color: "blue"}
        const created = await service.create(item);
        return request(app)
            .get(`/${type}s/${created.id}/delete?loc=/newloc`)
            .expect(302)
            .then(data => {
                expect(data.text).toContain(`Found. Redirecting to /newloc`)
            })
    })

    it(`should fail to delete a ${type}`, function () {
        return request(app)
            .get(`/${type}s/123/delete`)
            .expect(302)
            .then(data => {
                expect(data.text).toContain(`Found. Redirecting to /${type}s?error=123`)
            })
    })

    it(`should get a ${type}`, function () {
        return request(app)
            .get(`/${type}s/123`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`${name}`)
            })
    })

    it(`should get add ${type} page`, function () {
        return request(app)
            .get(`/${type}s/add`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`Add a ${name}`)
            })
    })

    it(`should add a ${type}`, function () {
        return request(app)
            .post(`/${type}s`)
            .expect(302)
            .send({name: `Test ${type}`, description: 'Test description', color: "blue"})
    })
})
