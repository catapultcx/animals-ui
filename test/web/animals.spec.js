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

  it('should get an animal', function () {
    return request(app)
      .get('/animals/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Animal')
      })
  })

  it('should get edit animal', function () {
    return request(app)
        .get('/animals/edit/1')
        .expect(200)
        .then(data => {
          expect(data.text).toContain('Animal')
        })
  })

  it('should get add animal', function () {
    return request(app)
      .get('/animals/add')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Add an Animal')
      })
  })

  it('should add an animal', function () {
    return request(app)
      .post('/animals')
      .expect(302)
      .send({ id: "456", name: 'Test cat', description: 'Test description' })
  })

  it('should update an animal', function () {
    return request(app)
        .put('/animals/456')
        .expect(302)
        .send({ id: "456", name: 'Test cat', description: 'Test description' })
  })

  it('should delete an animal', function () {
    return request(app)
        .delete('/animals/456?_method=DELETE')
        .expect(302)
  })
})
