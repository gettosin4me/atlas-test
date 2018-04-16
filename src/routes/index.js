"use strict";

const express = require('express')
const ctrl = require('./../app/controllers/app')

module.exports = function () {
    let router = express.Router()
  
    // App routes
    require("./app")(router, ctrl)
  
    return router
  }
