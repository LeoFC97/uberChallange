require('dotenv').config();
const express = require('express');
const routes = require('./routes')

const app = express();
app.use(routes);

app.set('port', process.env.PORT);
const server = app.listen(process.env.PORT, () => {
  console.log(`server runing @ port: ${process.env.PORT}`);
});

module.exports = server;
