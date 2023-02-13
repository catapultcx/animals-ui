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

 it('should get delete an animal confirmation', function () {
    return request(app)
      .get('/animals/delete/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Are you sure you want to delete animal data ?')
      })
  })

 it('should get delete an animal confirmation', function () {
    return request(app)
      .get('/animals/delete/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Are you sure you want to delete animal data ?')
      })
  })

  it('should set update an animal page', function () {
    return request(app)
      .get('/animals/edit/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Update an animal')
      })
  })

  it('should get add an animal page', function () {
    return request(app)
      .get('/animals/add')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Add an animal')
      })
  })

  it('should add an animal', function () {
    return request(app)
      .post('/animals')
      .expect(302)
      .send({ name: 'Test cat', description: 'Test description' })
  })

 it('should save an animal', function () {
    return request(app)
      .post('/animals/save')
      .expect(302)
      .send({ id:123, name: 'Test cat', description: 'Test description' })
  })

  it('should delete an animal', function () {
    return request(app)
      .post('/animals/123')
      .expect(302)
      .send({delete:'yes', name: 'Test cat', description: 'Test description' })
  })

  it('should not delete an animal ', function () {
    return request(app)
      .post('/animals/123')
      .expect(302)
      .send({delete:'no', name: 'Test cat', description: 'Test description' })
  })

  it('should not delete an animal ', function () {
    return request(app)
      .post('/animals/123')
      .expect(302)
      .send({delete:'no', name: 'Test cat', description: 'Test description' })
  })
})
