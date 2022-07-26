import request from 'supertest'
import app from '../src/app'

describe('Test path root not found', () => {
  it('Should response path not found then reponse with status code 404', async () => {
    const { statusCode, body } = await request(app).get('/notFoundPath')

    expect(statusCode).toEqual(404)
    expect(body.message).toEqual('path not found')
  })
})

describe('Test the /ping path', () => {
  it('Should response at the path / with status code 200', async () => {
    const { statusCode, body } = await request(app).get('/ping/')

    expect(statusCode).toEqual(200)
    expect(body.message).toEqual('pong')
  })

  it('Should response at the path /201 with status code 201', async () => {
    const { statusCode, body } = await request(app).get('/ping/201')

    expect(statusCode).toEqual(201)
    expect(body.message).toEqual('pong create')
  })

  it('Should response at the path /404 with status code 404', async () => {
    const { statusCode, body } = await request(app).get('/ping/404')

    expect(statusCode).toEqual(404)
    expect(body.message).toEqual('pong not found')
  })

  it('Should response at the path /500 with status code 500', async () => {
    const { statusCode, body } = await request(app).get('/ping/500')

    expect(statusCode).toEqual(500)
    expect(body.message).toEqual('pong error server')
  })
})
