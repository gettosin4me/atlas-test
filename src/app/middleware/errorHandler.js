'use strict'

module.exports = function(req, res, error, next) {
    res.status(500).json({
        error
    })

    next()
}