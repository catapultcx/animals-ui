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
})
