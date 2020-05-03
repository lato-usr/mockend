'use strict'

const randPort = require('..')

test('rand port', () => {
  expect(Number.isInteger(randPort())).toBe(true)
  expect(Number.isInteger(randPort('user'))).toBe(true)
})
