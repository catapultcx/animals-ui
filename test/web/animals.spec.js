import request from 'supertest'
import app from '../../src/app'

describe('/', function () {

  it('should get animals', function () {
    return request(app)
      .get('/animals')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Animals')
      })
  })

  it('should get add animal page', function () {
    return request(app)
      .get('/animals/add')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Add a Animal')
      })
  })

  it('should get view animal page', function () {
    return request(app)
      .get('/animals/view/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('View Animal')
      })
  })

  it('should get update animal page', function () {
    return request(app)
      .get('/animals/update/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Update Animal')
      })
  })

  it('should delete an animal', function () {
    return request(app)
      .get('/animals/delete/123')
      .expect(302)
      .send({ name: 'Test animal', description: 'Test description', color: 'Test color', type: 'Test type' })
  })

  it('should add an animal', function () {
    return request(app)
      .post('/animals')
      .expect(302)
      .send({ name: 'Test animal', description: 'Test description', color: 'Test color', type: 'Test type' })
  })
})
