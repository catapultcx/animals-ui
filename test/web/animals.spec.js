import request from 'supertest'
import app from '../../src/app'
import {supportedAnimalTypes} from "../../src/app-config.js";

describe.each(supportedAnimalTypes)(`/%ss`, function (type) {
  const name = type.charAt(0).toUpperCase() + type.slice(1);

  it(`should get ${type}s`, function () {
    return request(app)
      .get(`/${type}s`)
      .expect(200)
      .then(data => {
        expect(data.text).toContain(`${name}s`)
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
      .send({ name: `Test ${type}`, description: 'Test description', color: "blue" })
  })
})
