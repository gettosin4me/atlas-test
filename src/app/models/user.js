'use strict'

var redis = require('redis');
var client = redis.createClient();

function createId() {
    var d = new Date();
    var n = d.getTime();
    return n
}

module.exports = {
    create (data) {
        client.hmset(data.id, 'id', data.id, 'name', data.name, 'school', data.school, 'level', data.level, 'age', data.age)
    },

    get(id, callback) {
        let data = null;
        
        client.hgetall(id, function (err, object) {
            callback(err, object)
        })
    },

    update (id, data) {
        client.hmset(id, 'id', data.id, 'name', data.name, 'school', data.school, 'level', data.level, 'age', data.age)
    },

    delete(id) {
        client.del(id);
    }
}