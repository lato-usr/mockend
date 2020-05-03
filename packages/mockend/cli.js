#!/usr/bin/env node

'use strict'

const randPort = require('@mockend/rand-port')
const app = require('.')
const port = randPort('user')

app.listen(port, () => console.log(port))
