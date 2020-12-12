require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const { service } = require('./config/enviroment');

const app = express();
app.use(routes);

app.set('port', service.port);

const server = app.listen(service.port, () => {
  console.log(`server runing @ port: ${service.port}`);
});

module.exports = server;
