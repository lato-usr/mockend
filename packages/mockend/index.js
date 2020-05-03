'use strict'

const fs = require('fs')
const os = require('os')
const path = require('path')
const express = require('express')

const app = express()
const tmpDir = path.resolve(
  os.tmpdir(),
  Math.floor(Math.random() * 1000).toString(),
)

fs.mkdirSync(tmpDir)
app.use(express.static(tmpDir))

app.post('/:name', (req, res, next) => {
  console.log(req.params.name)
  fs.writeFile(path.resolve(tmpDir, req.params.name), '', (err) => {
    if (err) next(err)
    res.sendStatus(201)
  })
})

module.exports = app
