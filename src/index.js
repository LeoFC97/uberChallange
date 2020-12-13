require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');
const { service } = require('./config/enviroment');

const app = express();
app.use(express.json());
app.use(helmet());

app.use(routes);

const server = app.listen(service.port, () => {
  console.log(`server runing @ port: ${service.port}`);
});

module.exports = server;
