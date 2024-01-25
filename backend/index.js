/*jslint node: true */
// jshint esversion:8
"use strict";

const { createServer } = require("http");
// const fs = require("fs");
const config = require("./configs/config");
// const path = require("path");
const database = require("./configs/database");

global.logger = require("./logger");
const app = require("./configs/express");

logger.info("Logger is ready");

// const options = {
//   key: fs.readFileSync(path.resolve(config.server_key)),
//   cert: fs.readFileSync(path.resolve(config.server_cert)),
// };
// create express app using http server
const server = createServer({}, app);

const port = app.get("port");
const startup = () => {
  server.listen(port, () => {
    logger.info(`Server started on port ${port} 🚀`);
  });
};

database.connect(config.mongodb_uri, startup);
