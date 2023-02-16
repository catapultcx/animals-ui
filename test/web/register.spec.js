import request from "supertest";
import app from "../../src/app.js";

describe(`/register`, function () {
    it(`should get index`, function () {
        return request(app)
            .get(`/register`)
            .expect(200)
            .then(data => {
                expect(data.text).toContain(`Register`)
            })
    })

    it(`should post a type`, function () {
        const type = Math.random().toString(36).slice(2, 7); // Creating random type names
        return request(app)
            .post(`/register`)
            .expect(302)
            .send({type, group: 'mammals'})
    })
})
