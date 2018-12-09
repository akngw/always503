const express = require('express')
const app = express()
const port = 3000

const f = (req, res, next) => {
    res.status(503).end()
    next()
}

const logger = (req, res, next) => {
    console.log(`time:${new Date()}\tmethod:${req.method}\tpath:${req.originalUrl}`)
    next()
}

app.use('*', logger, f)

app.listen(port, () => console.log(`Listening on port ${port}!`))