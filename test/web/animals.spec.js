import request from 'supertest'
import app from '../../src/app'

describe(`/animals`, function () {
    it(`should get index`, function () {
        return request(app)
            .get(`/animals`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`Animals`)
            })
    })

    it(`should get add page`, function () {
        return request(app)
            .get(`/animals/add`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`Add an animal`)
            })
    })
    it(`should add a animal`, function () {
        return request(app)
            .post(`/animals/add`)
            .expect(302)
            .send({type: "cat", name:'Test cat', description: 'Test description', color: "blue"})
    })

    it(`should handle error when adding an animal`, function () {
        return request(app)
            .post(`/animals/add`)
            .expect(302)
            .send({type: "cat", name:null, description: 'Test description', color: "blue"})
    })
})
