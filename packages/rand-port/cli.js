#!/usr/bin/env node

'use strict'

const randPort = require('.')

console.log(randPort(process.argv[2] || 'user'))
