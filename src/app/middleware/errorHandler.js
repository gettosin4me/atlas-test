'use strict'

module.exports = function(req, res, error) {
    res.status(500).json({
        error
    })
}