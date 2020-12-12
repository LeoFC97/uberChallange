require('dotenv').config();

const express = require('express');

const app = express();

app.set('port', process.env.PORT);
const server = app.listen(process.env.PORT, () => {
  console.log(`server runing @ port: ${process.env.PORT}`);
});

module.exports = server;
