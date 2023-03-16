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

  it('should get add animal page', function () {
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
      .send({ name: 'Test animal', description: 'Test description', color: 'white', type: 'AMPHIBIAN' })
  })

  it('should delete an animal', function () {
    return request(app)
      .post('/animals/123')
      .expect(302)
  })

  it('should get update page', function () {
    return request(app)
      .get('/animals/update/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Edit an Animal')
      })
  })

  it('should update an animal', function () {
    return request(app)
      .post('/animals/update/123')
      .expect(302)
      .send({ name: 'Cobra', description: 'Black Cobra', color: 'black', type: 'REPTILES' })
  })

})
