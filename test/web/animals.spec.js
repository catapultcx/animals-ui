import request from 'supertest'
import app from '../../src/app'

describe('/', function () {
    let createdId;

    it('should get animals', function () {
        return request(app)
            .get('/animals')
            .expect(200)
            .then(data => {
                expect(data.text).toContain('Animals')
                let startPos = data.text.indexOf("/animals/update/") + 16;
                createdId = data.text.substring(startPos, startPos + 36);
            })
    })

    it('should get a animal', function () {
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
                expect(data.text).toContain('Add a Animal')
            })
    })

    it('should add a animal', function () {
        return request(app)
            .post('/animals')
            .expect(302)
            .send({name: 'Test animal', type: 'Dog', color: 'Grey', description: 'Test description'})
    })

    it('should get update animal page', function () {
        return request(app)
            .get('/animals/update/id')
            .expect(200)
            .then(data => {
                expect(data.text).toContain('Update an Animal')
            })
    })

    it('should update an animal', function () {
        return request(app)
            .post('/animals/update')
            .expect(302)
            .send({id: createdId, name: 'Test animal', type: 'Dog', color: 'Brown', description: 'Test description'})
    })

    it('should delete an animal', function () {
        return request(app)
            .get('/animals/delete/id')
            .expect(302)
            .then(data => {
                expect(data.text).toContain('Found. Redirecting to /animals')
            })
    })

    it('should get filter animal page', function () {
        return request(app)
            .get('/animals/filter')
            .expect(200).then(data => {
                expect(data.text).toContain('Filter Animals')
            })
    })

    it('should filter an animal', function () {
        return request(app)
            .post('/animals/filter')
            .expect(200)
    })

})
