'use strict'

module.exports = (router, ctrl) => {
    router.get('/', ctrl.index)
    router.post('/create', ctrl.post)
    router.get('/read/:id', ctrl.read)
    router.put('/update/:id', ctrl.update)
    router.delete('/delete/:id', ctrl.delete)
}