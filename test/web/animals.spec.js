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

  it('should add an Animal', function () {
    return request(app)
      .post('/animals')
      .expect(302)
      .send({ name: 'Test cat', description: 'Test description', type: 'Test type', colour: 'Test colour' })
  })

  // it('should remove an Animal', function () {
  //   return request(app)
  //       .get('/animals/delete/123')
  //       .expect(200)
  //       .then(data => {
  //         expect(data.text).toContain('Animals')
  //       })
  // })
})
