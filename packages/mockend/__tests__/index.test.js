'use strict'

const app = require('..')
const request = require('supertest')

test('requests', async () => {
  let res

  res = await request(app).post('/empty.txt')
  expect(res.statusCode).toBe(201)

  res = await request(app).get('/empty.txt')
  expect(res.statusCode).toBe(200)

  res = await request(app).get('/not-found.txt')
  expect(res.statusCode).toBe(404)
})
