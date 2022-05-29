import request from 'supertest'
import app from '../../src/app'

describe('/', function () {

  it('should load homepage', function () {
    return request(app)
      .get('/')
      .expect(200)
      .then(data => {
        expect(data.text).toContain('Welcome to the GOV.UK service')
      })
  })

  it('should not load login', function () {
    return request(app)
      .get('/login')
      .expect(404)
      .catch(err => {
        expect(err.body).toContain('Page not implemented yet')
      })
  })

  it('should not load signup', function () {
    return request(app)
      .get('/signup')
      .expect(404)
      .catch(err => {
        expect(err.body).toContain('Page not implemented yet')
      })
  })

  it('should load 404 error page', function () {
    return request(app)
      .get('/404-not-found')
      .expect(404)
      .catch(err => {
        expect(err.body).toContain('Page not found')
        expect(10).toEqual(1000999)
      })
  })
})
