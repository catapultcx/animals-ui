import request from 'supertest'
import app from '../../src/app'

describe('/', function () {

  it('should get generic', function () {
    return request(app)
      .get('/generic')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Generic')
      })
  })

  it('should get an animal', function () {
    return request(app)
      .get('/generic/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Generic')
      })
  })

  it('should get add animal page', function () {
    return request(app)
      .get('/generic/add')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Add an animal')
      })
  })

  it('should add an animal', function () {
    return request(app)
      .post('/generic')
      .expect(302)
      .send({ name: 'Test animal', description: 'Test description' })
  })
})
