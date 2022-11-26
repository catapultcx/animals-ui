import request from 'supertest'
import app from '../../src/app'

describe('/', function () {

  it('should get animals', function () {
    return request(app)
      .get('/animals')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Animals')
        expect(data.text).toContain('Type')
      })
  })

  it('should get an animal', function () {
    return request(app)
      .get('/animals/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Animal')
        expect(data.text).toContain('Type')
      })
  })

  it('should get add animal page', function () {
    return request(app)
      .get('/animals/add')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Add an Animal')
        expect(data.text).toContain('Type')
      })
  })

  it('should add an animal', function () {
    return request(app)
      .post('/animals')
      .expect(302)
      .send({ name: 'Test animal', description: 'Test description' })
  })
})
