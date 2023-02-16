import request from 'supertest'
import app from '../../src/app'
import {supportedAnimalTypes} from "../test-config.js";
import AnimalService from "../../src/services/animal-service.js";

describe.each(supportedAnimalTypes)(`/%ss`, function (type) {
    const name = type.charAt(0).toUpperCase() + type.slice(1);
    const service = new AnimalService(process.env.API_URL, `${type}s`)
    it(`should get ${type}s`, function () {
        return request(app)
            .get(`/types/${type}`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`${name}s`)
            })
    })

    it(`should delete a ${type}`, async function () {
        const item = {name: 'Tom', description: 'Friend of Jerry', color: "blue"}
        const created = await service.create(item);
        return request(app)
            .get(`/types/${type}/${created.id}/delete`)
            .expect(302)
            .then(data => {
                expect(data.text).toContain(`Found. Redirecting to /types/${type}`)
            })
    })

    it(`should redirect delete to loc`, async function () {
        const item = {name: 'Tom', description: 'Friend of Jerry', color: "blue"}
        const created = await service.create(item);
        return request(app)
            .get(`/types/${type}/${created.id}/delete?loc=/newloc`)
            .expect(302)
            .then(data => {
                expect(data.text).toContain(`Found. Redirecting to /newloc`)
            })
    })

    it(`should fail to delete a ${type}`, function () {
        return request(app)
            .get(`/types/${type}/123/delete`)
            .expect(302)
            .then(data => {
                expect(data.text).toContain(`Found. Redirecting to /types/${type}?error=123`)
            })
    })

    it(`should get a ${type}`, function () {
        return request(app)
            .get(`/types/${type}/123`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`${name}`)
            })
    })

    it(`should get add ${type} page`, function () {
        return request(app)
            .get(`/types/${type}/add`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`Add a ${name}`)
            })
    })

    it(`should get 404 page if not found`, function () {
        return request(app)
            .get(`/types/fron/no/one`)
            .expect(404)
            .then(data => {
                expect(data.text).toContain(`Page not found`)
            })
    })

    it(`should add a ${type}`, function () {
        return request(app)
            .post(`/types/${type}`)
            .expect(302)
            .send({name: `Test ${type}`, description: 'Test description', color: "blue"})
    })
})
