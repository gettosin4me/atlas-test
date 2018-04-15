'use strict'

const express = require('express')
const appController = require('./../../app/controllers/app')

const router = express()

module.exports = function () {
    router.get('/', appController.index)
    router.post('/create', appController.post)
    router.get('/read/:id', appController.read)
    router.put('/update/:id', appController.update)
    router.delete('/delete/:id', appController.delete)

    return router
}