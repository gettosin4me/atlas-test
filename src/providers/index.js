'use strict'

module.exports = {
    get database () {
        return require('./database')
    },

    get routes () {
        return require('./routes')
    }
}