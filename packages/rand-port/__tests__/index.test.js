'use strict'

const randPort = require('..')

test('rand port', () => {
  expect(randPort).toThrowError()
  expect(Number.isInteger(randPort('user'))).toBe(true)
})
