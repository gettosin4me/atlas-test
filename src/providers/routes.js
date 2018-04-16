'use strict'

module.exports = {
    boot (app, routes) {
        app.use(routes())
    }
}