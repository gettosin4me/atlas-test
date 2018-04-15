"use strict";

const { createClient } = require("then-redis");

module.exports = {
  boot(app) {
    let client = createClient({
      host: "localhost",
      port: 6379
    });

    client.on("connect", function() {
      console.log("connected");
    });
  }
};
