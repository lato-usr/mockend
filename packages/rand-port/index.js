'use strict'

const _random = require('lodash.random')

module.exports = (type = 'user') => {
  switch (type) {
    case 'system':
      return _random(0, 1023)
    case 'user':
      return _random(1024, 49151)
    case 'dynamic':
      return _random(49152, 65535)
    default:
      throw new Error('unknown type')
  }
}
