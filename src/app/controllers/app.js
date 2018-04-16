'use strict'

const model = require('./../models')

module.exports = {
    index(req, res) {
        res.status(200).json({message: "Index Loaded"});
    },

    post (req, res) {
        model.user.create(req.body)
        res.status(200).json({message: 'created successfully'});
    },

    read(req, res) {
        model.user.get(req.params.id, (err, object) => {
            res.status(200).json({data: object});
        })
        
    },

    update (req, res) {
        model.user.update(req.params.id, req.body)
        
        res.status(200).json({message: "updated Successfully"});
    },

    delete(req, res) {
        model.user.delete(req.params.id);
        res.status(200).json({message: "deleted Successfully"});
    }
}