import request from 'supertest'
import app from '../src/app'

describe('Test path root not found', () => {
  it('Should response path not found then reponse with status code 404', (done) => {
    request(app)
      .get('/notFoundPath')
      .then((response) => {
        expect(response.statusCode).toEqual(404)
        expect(response.body.message).toEqual('path not found')

        done()
      })
  })
})

describe('Test the /ping path', () => {
  it('Should response at the path / with status code 200', (done) => {
    request(app)
      .get('/ping/')
      .then((response) => {
        expect(response.statusCode).toEqual(200)
        expect(response.body.message).toEqual('pong')

        done()
      })
  })

  it('Should response at the path /201 with status code 201', (done) => {
    request(app)
      .get('/ping/201')
      .then((response) => {
        expect(response.statusCode).toEqual(201)
        expect(response.body.message).toEqual('pong create')

        done()
      })
  })

  it('Should response at the path /404 with status code 404', (done) => {
    request(app)
      .get('/ping/404')
      .then((response) => {
        expect(response.statusCode).toEqual(404)
        expect(response.body.message).toEqual('pong not found')

        done()
      })
  })

  it('Should response at the path /500 with status code 500', (done) => {
    request(app)
      .get('/ping/500')
      .then((response) => {
        expect(response.statusCode).toEqual(500)
        expect(response.body.message).toEqual('pong error server')

        done()
      })
  })
})
