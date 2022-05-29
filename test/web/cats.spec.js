import request from 'supertest'
import app from '../../src/app'

describe('/', function () {

  it('should get cats', function () {
    return request(app)
      .get('/cats')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Cats')
      })
  })

  it('should get a cat', function () {
    return request(app)
      .get('/cats/123')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Cat')
      })
  })

  it('should get add cat page', function () {
    return request(app)
      .get('/cats/add')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Add a Cat')
      })
  })

  it('should add a cat', function () {
    return request(app)
      .post('/cats')
      .expect(302)
      .send({ name: 'Test cat', description: 'Test description' })
  })
})
